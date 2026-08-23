import React from 'react';
const LABEL_38524 = 'component_38524';
export function Component38524({ value = 38524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38524, 'data-value': derived.doubled }, children);
}
export default Component38524;
