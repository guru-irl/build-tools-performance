import React from 'react';
const LABEL_6744 = 'component_6744';
export function Component6744({ value = 6744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6744, 'data-value': derived.doubled }, children);
}
export default Component6744;
