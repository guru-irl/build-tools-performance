import React from 'react';
const LABEL_2901 = 'component_2901';
export function Component2901({ value = 2901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2901, 'data-value': derived.doubled }, children);
}
export default Component2901;
