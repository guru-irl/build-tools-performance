import React from 'react';
const LABEL_35643 = 'component_35643';
export function Component35643({ value = 35643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35643, 'data-value': derived.doubled }, children);
}
export default Component35643;
