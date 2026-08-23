import React from 'react';
const LABEL_39198 = 'component_39198';
export function Component39198({ value = 39198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39198, 'data-value': derived.doubled }, children);
}
export default Component39198;
