import React from 'react';
const LABEL_38742 = 'component_38742';
export function Component38742({ value = 38742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38742, 'data-value': derived.doubled }, children);
}
export default Component38742;
