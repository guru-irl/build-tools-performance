import React from 'react';
const LABEL_26184 = 'component_26184';
export function Component26184({ value = 26184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26184, 'data-value': derived.doubled }, children);
}
export default Component26184;
