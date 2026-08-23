import React from 'react';
const LABEL_10961 = 'component_10961';
export function Component10961({ value = 10961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10961, 'data-value': derived.doubled }, children);
}
export default Component10961;
