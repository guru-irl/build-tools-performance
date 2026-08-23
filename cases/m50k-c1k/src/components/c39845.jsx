import React from 'react';
const LABEL_39845 = 'component_39845';
export function Component39845({ value = 39845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39845, 'data-value': derived.doubled }, children);
}
export default Component39845;
