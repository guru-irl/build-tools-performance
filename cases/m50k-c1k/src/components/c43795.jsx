import React from 'react';
const LABEL_43795 = 'component_43795';
export function Component43795({ value = 43795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43795, 'data-value': derived.doubled }, children);
}
export default Component43795;
