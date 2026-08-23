import React from 'react';
const LABEL_7403 = 'component_7403';
export function Component7403({ value = 7403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7403, 'data-value': derived.doubled }, children);
}
export default Component7403;
