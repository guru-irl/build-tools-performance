import React from 'react';
const LABEL_38623 = 'component_38623';
export function Component38623({ value = 38623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38623, 'data-value': derived.doubled }, children);
}
export default Component38623;
