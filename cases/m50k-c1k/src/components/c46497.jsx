import React from 'react';
const LABEL_46497 = 'component_46497';
export function Component46497({ value = 46497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46497, 'data-value': derived.doubled }, children);
}
export default Component46497;
