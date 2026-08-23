import React from 'react';
const LABEL_35667 = 'component_35667';
export function Component35667({ value = 35667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35667, 'data-value': derived.doubled }, children);
}
export default Component35667;
