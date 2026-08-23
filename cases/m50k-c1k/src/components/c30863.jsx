import React from 'react';
const LABEL_30863 = 'component_30863';
export function Component30863({ value = 30863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30863, 'data-value': derived.doubled }, children);
}
export default Component30863;
