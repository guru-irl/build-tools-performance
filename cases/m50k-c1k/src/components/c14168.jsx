import React from 'react';
const LABEL_14168 = 'component_14168';
export function Component14168({ value = 14168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14168, 'data-value': derived.doubled }, children);
}
export default Component14168;
