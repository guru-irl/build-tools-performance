import React from 'react';
const LABEL_15417 = 'component_15417';
export function Component15417({ value = 15417, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15417, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15417, 'data-value': derived.doubled }, children);
}
export default Component15417;
