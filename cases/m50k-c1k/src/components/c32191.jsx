import React from 'react';
const LABEL_32191 = 'component_32191';
export function Component32191({ value = 32191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32191, 'data-value': derived.doubled }, children);
}
export default Component32191;
