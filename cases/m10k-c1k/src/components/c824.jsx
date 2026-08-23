import React from 'react';
const LABEL_824 = 'component_824';
export function Component824({ value = 824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_824, 'data-value': derived.doubled }, children);
}
export default Component824;
