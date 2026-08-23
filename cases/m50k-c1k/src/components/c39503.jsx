import React from 'react';
const LABEL_39503 = 'component_39503';
export function Component39503({ value = 39503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39503, 'data-value': derived.doubled }, children);
}
export default Component39503;
