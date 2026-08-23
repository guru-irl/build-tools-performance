import React from 'react';
const LABEL_12744 = 'component_12744';
export function Component12744({ value = 12744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12744, 'data-value': derived.doubled }, children);
}
export default Component12744;
