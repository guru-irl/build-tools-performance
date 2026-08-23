import React from 'react';
const LABEL_45867 = 'component_45867';
export function Component45867({ value = 45867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45867, 'data-value': derived.doubled }, children);
}
export default Component45867;
