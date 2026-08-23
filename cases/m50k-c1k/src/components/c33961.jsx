import React from 'react';
const LABEL_33961 = 'component_33961';
export function Component33961({ value = 33961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33961, 'data-value': derived.doubled }, children);
}
export default Component33961;
