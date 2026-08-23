import React from 'react';
const LABEL_38188 = 'component_38188';
export function Component38188({ value = 38188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38188, 'data-value': derived.doubled }, children);
}
export default Component38188;
