import React from 'react';
const LABEL_39676 = 'component_39676';
export function Component39676({ value = 39676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39676, 'data-value': derived.doubled }, children);
}
export default Component39676;
