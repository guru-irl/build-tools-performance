import React from 'react';
const LABEL_45961 = 'component_45961';
export function Component45961({ value = 45961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45961, 'data-value': derived.doubled }, children);
}
export default Component45961;
