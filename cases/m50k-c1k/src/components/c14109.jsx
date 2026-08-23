import React from 'react';
const LABEL_14109 = 'component_14109';
export function Component14109({ value = 14109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14109, 'data-value': derived.doubled }, children);
}
export default Component14109;
