import React from 'react';
const LABEL_14088 = 'component_14088';
export function Component14088({ value = 14088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14088, 'data-value': derived.doubled }, children);
}
export default Component14088;
