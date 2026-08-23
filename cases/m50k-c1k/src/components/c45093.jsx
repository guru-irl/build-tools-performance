import React from 'react';
const LABEL_45093 = 'component_45093';
export function Component45093({ value = 45093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45093, 'data-value': derived.doubled }, children);
}
export default Component45093;
