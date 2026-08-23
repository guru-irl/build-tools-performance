import React from 'react';
const LABEL_20716 = 'component_20716';
export function Component20716({ value = 20716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20716, 'data-value': derived.doubled }, children);
}
export default Component20716;
