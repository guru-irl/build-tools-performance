import React from 'react';
const LABEL_28431 = 'component_28431';
export function Component28431({ value = 28431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28431, 'data-value': derived.doubled }, children);
}
export default Component28431;
