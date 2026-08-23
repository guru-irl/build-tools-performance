import React from 'react';
const LABEL_3204 = 'component_3204';
export function Component3204({ value = 3204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3204, 'data-value': derived.doubled }, children);
}
export default Component3204;
