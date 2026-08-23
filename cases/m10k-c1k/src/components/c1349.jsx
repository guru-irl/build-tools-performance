import React from 'react';
const LABEL_1349 = 'component_1349';
export function Component1349({ value = 1349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1349, 'data-value': derived.doubled }, children);
}
export default Component1349;
