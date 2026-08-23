import React from 'react';
const LABEL_39102 = 'component_39102';
export function Component39102({ value = 39102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39102, 'data-value': derived.doubled }, children);
}
export default Component39102;
