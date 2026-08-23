import React from 'react';
const LABEL_1068 = 'component_1068';
export function Component1068({ value = 1068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1068, 'data-value': derived.doubled }, children);
}
export default Component1068;
