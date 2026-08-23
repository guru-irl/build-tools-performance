import React from 'react';
const LABEL_6165 = 'component_6165';
export function Component6165({ value = 6165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6165, 'data-value': derived.doubled }, children);
}
export default Component6165;
