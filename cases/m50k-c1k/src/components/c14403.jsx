import React from 'react';
const LABEL_14403 = 'component_14403';
export function Component14403({ value = 14403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14403, 'data-value': derived.doubled }, children);
}
export default Component14403;
