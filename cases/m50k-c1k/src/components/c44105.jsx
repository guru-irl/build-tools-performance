import React from 'react';
const LABEL_44105 = 'component_44105';
export function Component44105({ value = 44105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44105, 'data-value': derived.doubled }, children);
}
export default Component44105;
