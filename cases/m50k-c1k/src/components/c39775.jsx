import React from 'react';
const LABEL_39775 = 'component_39775';
export function Component39775({ value = 39775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39775, 'data-value': derived.doubled }, children);
}
export default Component39775;
