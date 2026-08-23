import React from 'react';
const LABEL_28704 = 'component_28704';
export function Component28704({ value = 28704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28704, 'data-value': derived.doubled }, children);
}
export default Component28704;
