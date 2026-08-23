import React from 'react';
const LABEL_5713 = 'component_5713';
export function Component5713({ value = 5713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5713, 'data-value': derived.doubled }, children);
}
export default Component5713;
