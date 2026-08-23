import React from 'react';
const LABEL_39929 = 'component_39929';
export function Component39929({ value = 39929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39929, 'data-value': derived.doubled }, children);
}
export default Component39929;
