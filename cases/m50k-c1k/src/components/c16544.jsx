import React from 'react';
const LABEL_16544 = 'component_16544';
export function Component16544({ value = 16544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16544, 'data-value': derived.doubled }, children);
}
export default Component16544;
