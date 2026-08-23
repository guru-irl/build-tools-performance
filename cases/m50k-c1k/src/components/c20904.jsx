import React from 'react';
const LABEL_20904 = 'component_20904';
export function Component20904({ value = 20904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20904, 'data-value': derived.doubled }, children);
}
export default Component20904;
