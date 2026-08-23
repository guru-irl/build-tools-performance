import React from 'react';
const LABEL_3585 = 'component_3585';
export function Component3585({ value = 3585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3585, 'data-value': derived.doubled }, children);
}
export default Component3585;
