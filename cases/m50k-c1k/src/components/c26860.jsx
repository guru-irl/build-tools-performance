import React from 'react';
const LABEL_26860 = 'component_26860';
export function Component26860({ value = 26860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26860, 'data-value': derived.doubled }, children);
}
export default Component26860;
