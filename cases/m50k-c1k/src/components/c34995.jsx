import React from 'react';
const LABEL_34995 = 'component_34995';
export function Component34995({ value = 34995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34995, 'data-value': derived.doubled }, children);
}
export default Component34995;
