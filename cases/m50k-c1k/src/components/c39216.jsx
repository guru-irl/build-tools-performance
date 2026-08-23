import React from 'react';
const LABEL_39216 = 'component_39216';
export function Component39216({ value = 39216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39216, 'data-value': derived.doubled }, children);
}
export default Component39216;
