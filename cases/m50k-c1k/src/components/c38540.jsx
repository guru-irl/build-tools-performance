import React from 'react';
const LABEL_38540 = 'component_38540';
export function Component38540({ value = 38540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38540, 'data-value': derived.doubled }, children);
}
export default Component38540;
