import React from 'react';
const LABEL_39616 = 'component_39616';
export function Component39616({ value = 39616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39616, 'data-value': derived.doubled }, children);
}
export default Component39616;
