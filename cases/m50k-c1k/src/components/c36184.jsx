import React from 'react';
const LABEL_36184 = 'component_36184';
export function Component36184({ value = 36184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36184, 'data-value': derived.doubled }, children);
}
export default Component36184;
