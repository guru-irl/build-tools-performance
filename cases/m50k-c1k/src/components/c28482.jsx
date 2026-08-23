import React from 'react';
const LABEL_28482 = 'component_28482';
export function Component28482({ value = 28482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28482, 'data-value': derived.doubled }, children);
}
export default Component28482;
