import React from 'react';
const LABEL_10744 = 'component_10744';
export function Component10744({ value = 10744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10744, 'data-value': derived.doubled }, children);
}
export default Component10744;
