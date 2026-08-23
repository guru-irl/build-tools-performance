import React from 'react';
const LABEL_6620 = 'component_6620';
export function Component6620({ value = 6620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6620, 'data-value': derived.doubled }, children);
}
export default Component6620;
