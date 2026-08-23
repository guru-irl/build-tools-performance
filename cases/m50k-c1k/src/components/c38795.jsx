import React from 'react';
const LABEL_38795 = 'component_38795';
export function Component38795({ value = 38795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38795, 'data-value': derived.doubled }, children);
}
export default Component38795;
