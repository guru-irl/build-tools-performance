import React from 'react';
const LABEL_23190 = 'component_23190';
export function Component23190({ value = 23190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23190, 'data-value': derived.doubled }, children);
}
export default Component23190;
