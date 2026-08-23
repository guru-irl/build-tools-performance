import React from 'react';
const LABEL_2795 = 'component_2795';
export function Component2795({ value = 2795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2795, 'data-value': derived.doubled }, children);
}
export default Component2795;
