import React from 'react';
const LABEL_45897 = 'component_45897';
export function Component45897({ value = 45897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45897, 'data-value': derived.doubled }, children);
}
export default Component45897;
