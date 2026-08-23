import React from 'react';
const LABEL_26075 = 'component_26075';
export function Component26075({ value = 26075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26075, 'data-value': derived.doubled }, children);
}
export default Component26075;
