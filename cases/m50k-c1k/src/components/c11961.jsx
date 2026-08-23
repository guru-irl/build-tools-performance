import React from 'react';
const LABEL_11961 = 'component_11961';
export function Component11961({ value = 11961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11961, 'data-value': derived.doubled }, children);
}
export default Component11961;
