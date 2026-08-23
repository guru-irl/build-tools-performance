import React from 'react';
const LABEL_1295 = 'component_1295';
export function Component1295({ value = 1295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1295, 'data-value': derived.doubled }, children);
}
export default Component1295;
