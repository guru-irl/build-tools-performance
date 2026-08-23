import React from 'react';
const LABEL_35230 = 'component_35230';
export function Component35230({ value = 35230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35230, 'data-value': derived.doubled }, children);
}
export default Component35230;
