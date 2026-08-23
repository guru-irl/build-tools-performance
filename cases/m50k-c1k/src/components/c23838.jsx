import React from 'react';
const LABEL_23838 = 'component_23838';
export function Component23838({ value = 23838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23838, 'data-value': derived.doubled }, children);
}
export default Component23838;
