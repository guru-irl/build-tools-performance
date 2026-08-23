import React from 'react';
const LABEL_34040 = 'component_34040';
export function Component34040({ value = 34040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34040, 'data-value': derived.doubled }, children);
}
export default Component34040;
