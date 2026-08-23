import React from 'react';
const LABEL_39735 = 'component_39735';
export function Component39735({ value = 39735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39735, 'data-value': derived.doubled }, children);
}
export default Component39735;
