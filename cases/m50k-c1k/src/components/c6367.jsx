import React from 'react';
const LABEL_6367 = 'component_6367';
export function Component6367({ value = 6367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6367, 'data-value': derived.doubled }, children);
}
export default Component6367;
