import React from 'react';
const LABEL_34429 = 'component_34429';
export function Component34429({ value = 34429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34429, 'data-value': derived.doubled }, children);
}
export default Component34429;
