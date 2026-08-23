import React from 'react';
const LABEL_3244 = 'component_3244';
export function Component3244({ value = 3244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3244, 'data-value': derived.doubled }, children);
}
export default Component3244;
