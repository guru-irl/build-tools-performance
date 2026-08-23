import React from 'react';
const LABEL_30888 = 'component_30888';
export function Component30888({ value = 30888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30888, 'data-value': derived.doubled }, children);
}
export default Component30888;
