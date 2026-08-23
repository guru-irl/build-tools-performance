import React from 'react';
const LABEL_15748 = 'component_15748';
export function Component15748({ value = 15748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15748, 'data-value': derived.doubled }, children);
}
export default Component15748;
