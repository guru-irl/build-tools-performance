import React from 'react';
const LABEL_3198 = 'component_3198';
export function Component3198({ value = 3198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3198, 'data-value': derived.doubled }, children);
}
export default Component3198;
