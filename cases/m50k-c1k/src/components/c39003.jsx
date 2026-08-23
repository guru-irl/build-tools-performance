import React from 'react';
const LABEL_39003 = 'component_39003';
export function Component39003({ value = 39003, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39003, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39003, 'data-value': derived.doubled }, children);
}
export default Component39003;
