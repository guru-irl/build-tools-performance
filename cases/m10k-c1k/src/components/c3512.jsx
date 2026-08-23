import React from 'react';
const LABEL_3512 = 'component_3512';
export function Component3512({ value = 3512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3512, 'data-value': derived.doubled }, children);
}
export default Component3512;
