import React from 'react';
const LABEL_19795 = 'component_19795';
export function Component19795({ value = 19795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19795, 'data-value': derived.doubled }, children);
}
export default Component19795;
