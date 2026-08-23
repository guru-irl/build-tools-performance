import React from 'react';
const LABEL_45692 = 'component_45692';
export function Component45692({ value = 45692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45692, 'data-value': derived.doubled }, children);
}
export default Component45692;
