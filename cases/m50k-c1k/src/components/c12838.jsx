import React from 'react';
const LABEL_12838 = 'component_12838';
export function Component12838({ value = 12838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12838, 'data-value': derived.doubled }, children);
}
export default Component12838;
