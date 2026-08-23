import React from 'react';
const LABEL_6421 = 'component_6421';
export function Component6421({ value = 6421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6421, 'data-value': derived.doubled }, children);
}
export default Component6421;
