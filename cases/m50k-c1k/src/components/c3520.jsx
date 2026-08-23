import React from 'react';
const LABEL_3520 = 'component_3520';
export function Component3520({ value = 3520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3520, 'data-value': derived.doubled }, children);
}
export default Component3520;
