import React from 'react';
const LABEL_32017 = 'component_32017';
export function Component32017({ value = 32017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32017, 'data-value': derived.doubled }, children);
}
export default Component32017;
