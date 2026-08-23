import React from 'react';
const LABEL_13223 = 'component_13223';
export function Component13223({ value = 13223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13223, 'data-value': derived.doubled }, children);
}
export default Component13223;
