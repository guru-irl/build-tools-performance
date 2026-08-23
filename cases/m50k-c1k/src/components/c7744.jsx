import React from 'react';
const LABEL_7744 = 'component_7744';
export function Component7744({ value = 7744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7744, 'data-value': derived.doubled }, children);
}
export default Component7744;
