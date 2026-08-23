import React from 'react';
const LABEL_20403 = 'component_20403';
export function Component20403({ value = 20403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20403, 'data-value': derived.doubled }, children);
}
export default Component20403;
