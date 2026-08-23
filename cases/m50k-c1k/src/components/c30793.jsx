import React from 'react';
const LABEL_30793 = 'component_30793';
export function Component30793({ value = 30793, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30793, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30793, 'data-value': derived.doubled }, children);
}
export default Component30793;
