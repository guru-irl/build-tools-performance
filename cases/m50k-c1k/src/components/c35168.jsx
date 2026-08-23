import React from 'react';
const LABEL_35168 = 'component_35168';
export function Component35168({ value = 35168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35168, 'data-value': derived.doubled }, children);
}
export default Component35168;
