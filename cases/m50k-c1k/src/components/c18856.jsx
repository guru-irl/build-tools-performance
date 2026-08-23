import React from 'react';
const LABEL_18856 = 'component_18856';
export function Component18856({ value = 18856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18856, 'data-value': derived.doubled }, children);
}
export default Component18856;
