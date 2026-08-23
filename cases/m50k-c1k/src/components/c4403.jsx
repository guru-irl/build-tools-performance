import React from 'react';
const LABEL_4403 = 'component_4403';
export function Component4403({ value = 4403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4403, 'data-value': derived.doubled }, children);
}
export default Component4403;
