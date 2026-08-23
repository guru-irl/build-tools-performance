import React from 'react';
const LABEL_10168 = 'component_10168';
export function Component10168({ value = 10168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10168, 'data-value': derived.doubled }, children);
}
export default Component10168;
