import React from 'react';
const LABEL_3716 = 'component_3716';
export function Component3716({ value = 3716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3716, 'data-value': derived.doubled }, children);
}
export default Component3716;
