import React from 'react';
const LABEL_1192 = 'component_1192';
export function Component1192({ value = 1192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1192, 'data-value': derived.doubled }, children);
}
export default Component1192;
