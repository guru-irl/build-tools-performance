import React from 'react';
const LABEL_29184 = 'component_29184';
export function Component29184({ value = 29184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29184, 'data-value': derived.doubled }, children);
}
export default Component29184;
