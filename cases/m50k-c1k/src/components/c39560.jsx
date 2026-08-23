import React from 'react';
const LABEL_39560 = 'component_39560';
export function Component39560({ value = 39560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39560, 'data-value': derived.doubled }, children);
}
export default Component39560;
