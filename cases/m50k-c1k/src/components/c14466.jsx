import React from 'react';
const LABEL_14466 = 'component_14466';
export function Component14466({ value = 14466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14466, 'data-value': derived.doubled }, children);
}
export default Component14466;
