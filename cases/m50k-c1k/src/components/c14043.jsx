import React from 'react';
const LABEL_14043 = 'component_14043';
export function Component14043({ value = 14043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14043, 'data-value': derived.doubled }, children);
}
export default Component14043;
