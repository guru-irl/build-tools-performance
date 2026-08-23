import React from 'react';
const LABEL_14239 = 'component_14239';
export function Component14239({ value = 14239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14239, 'data-value': derived.doubled }, children);
}
export default Component14239;
