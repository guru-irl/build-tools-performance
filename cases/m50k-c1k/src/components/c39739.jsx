import React from 'react';
const LABEL_39739 = 'component_39739';
export function Component39739({ value = 39739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39739, 'data-value': derived.doubled }, children);
}
export default Component39739;
