import React from 'react';
const LABEL_34512 = 'component_34512';
export function Component34512({ value = 34512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34512, 'data-value': derived.doubled }, children);
}
export default Component34512;
