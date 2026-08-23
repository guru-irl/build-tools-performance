import React from 'react';
const LABEL_20114 = 'component_20114';
export function Component20114({ value = 20114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20114, 'data-value': derived.doubled }, children);
}
export default Component20114;
