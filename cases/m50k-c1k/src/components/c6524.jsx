import React from 'react';
const LABEL_6524 = 'component_6524';
export function Component6524({ value = 6524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6524, 'data-value': derived.doubled }, children);
}
export default Component6524;
