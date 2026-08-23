import React from 'react';
const LABEL_34793 = 'component_34793';
export function Component34793({ value = 34793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34793, 'data-value': derived.doubled }, children);
}
export default Component34793;
