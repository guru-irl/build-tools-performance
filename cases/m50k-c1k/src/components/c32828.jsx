import React from 'react';
const LABEL_32828 = 'component_32828';
export function Component32828({ value = 32828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32828, 'data-value': derived.doubled }, children);
}
export default Component32828;
