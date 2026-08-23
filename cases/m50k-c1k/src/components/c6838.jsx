import React from 'react';
const LABEL_6838 = 'component_6838';
export function Component6838({ value = 6838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6838, 'data-value': derived.doubled }, children);
}
export default Component6838;
