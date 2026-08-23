import React from 'react';
const LABEL_14503 = 'component_14503';
export function Component14503({ value = 14503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14503, 'data-value': derived.doubled }, children);
}
export default Component14503;
