import React from 'react';
const LABEL_32261 = 'component_32261';
export function Component32261({ value = 32261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32261, 'data-value': derived.doubled }, children);
}
export default Component32261;
