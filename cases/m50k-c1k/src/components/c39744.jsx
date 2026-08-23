import React from 'react';
const LABEL_39744 = 'component_39744';
export function Component39744({ value = 39744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39744, 'data-value': derived.doubled }, children);
}
export default Component39744;
