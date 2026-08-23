import React from 'react';
const LABEL_33867 = 'component_33867';
export function Component33867({ value = 33867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33867, 'data-value': derived.doubled }, children);
}
export default Component33867;
