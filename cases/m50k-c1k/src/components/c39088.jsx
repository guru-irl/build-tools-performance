import React from 'react';
const LABEL_39088 = 'component_39088';
export function Component39088({ value = 39088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39088, 'data-value': derived.doubled }, children);
}
export default Component39088;
