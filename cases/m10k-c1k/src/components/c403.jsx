import React from 'react';
const LABEL_403 = 'component_403';
export function Component403({ value = 403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_403, 'data-value': derived.doubled }, children);
}
export default Component403;
