import React from 'react';
const LABEL_39832 = 'component_39832';
export function Component39832({ value = 39832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39832, 'data-value': derived.doubled }, children);
}
export default Component39832;
