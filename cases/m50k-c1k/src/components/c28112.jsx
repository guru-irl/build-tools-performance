import React from 'react';
const LABEL_28112 = 'component_28112';
export function Component28112({ value = 28112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28112, 'data-value': derived.doubled }, children);
}
export default Component28112;
