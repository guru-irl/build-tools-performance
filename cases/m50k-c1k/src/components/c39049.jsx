import React from 'react';
const LABEL_39049 = 'component_39049';
export function Component39049({ value = 39049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39049, 'data-value': derived.doubled }, children);
}
export default Component39049;
