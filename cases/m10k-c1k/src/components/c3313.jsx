import React from 'react';
const LABEL_3313 = 'component_3313';
export function Component3313({ value = 3313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3313, 'data-value': derived.doubled }, children);
}
export default Component3313;
