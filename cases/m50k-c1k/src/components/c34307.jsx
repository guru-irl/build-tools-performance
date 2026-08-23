import React from 'react';
const LABEL_34307 = 'component_34307';
export function Component34307({ value = 34307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34307, 'data-value': derived.doubled }, children);
}
export default Component34307;
