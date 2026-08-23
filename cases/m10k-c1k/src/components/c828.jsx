import React from 'react';
const LABEL_828 = 'component_828';
export function Component828({ value = 828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_828, 'data-value': derived.doubled }, children);
}
export default Component828;
