import React from 'react';
const LABEL_24165 = 'component_24165';
export function Component24165({ value = 24165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24165, 'data-value': derived.doubled }, children);
}
export default Component24165;
