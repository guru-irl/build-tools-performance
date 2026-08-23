import React from 'react';
const LABEL_29403 = 'component_29403';
export function Component29403({ value = 29403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29403, 'data-value': derived.doubled }, children);
}
export default Component29403;
