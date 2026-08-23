import React from 'react';
const LABEL_34524 = 'component_34524';
export function Component34524({ value = 34524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34524, 'data-value': derived.doubled }, children);
}
export default Component34524;
