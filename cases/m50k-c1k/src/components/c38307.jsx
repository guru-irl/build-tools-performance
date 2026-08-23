import React from 'react';
const LABEL_38307 = 'component_38307';
export function Component38307({ value = 38307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38307, 'data-value': derived.doubled }, children);
}
export default Component38307;
