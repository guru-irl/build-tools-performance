import React from 'react';
const LABEL_44769 = 'component_44769';
export function Component44769({ value = 44769, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44769, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44769, 'data-value': derived.doubled }, children);
}
export default Component44769;
