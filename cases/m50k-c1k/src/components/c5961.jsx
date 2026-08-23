import React from 'react';
const LABEL_5961 = 'component_5961';
export function Component5961({ value = 5961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5961, 'data-value': derived.doubled }, children);
}
export default Component5961;
