import React from 'react';
const LABEL_30579 = 'component_30579';
export function Component30579({ value = 30579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30579, 'data-value': derived.doubled }, children);
}
export default Component30579;
