import React from 'react';
const LABEL_35403 = 'component_35403';
export function Component35403({ value = 35403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35403, 'data-value': derived.doubled }, children);
}
export default Component35403;
