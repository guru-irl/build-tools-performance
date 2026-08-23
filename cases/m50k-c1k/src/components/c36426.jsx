import React from 'react';
const LABEL_36426 = 'component_36426';
export function Component36426({ value = 36426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36426, 'data-value': derived.doubled }, children);
}
export default Component36426;
