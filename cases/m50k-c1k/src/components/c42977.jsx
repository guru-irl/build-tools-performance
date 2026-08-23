import React from 'react';
const LABEL_42977 = 'component_42977';
export function Component42977({ value = 42977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42977, 'data-value': derived.doubled }, children);
}
export default Component42977;
