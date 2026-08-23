import React from 'react';
const LABEL_3447 = 'component_3447';
export function Component3447({ value = 3447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3447, 'data-value': derived.doubled }, children);
}
export default Component3447;
