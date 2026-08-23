import React from 'react';
const LABEL_38473 = 'component_38473';
export function Component38473({ value = 38473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38473, 'data-value': derived.doubled }, children);
}
export default Component38473;
