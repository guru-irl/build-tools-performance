import React from 'react';
const LABEL_25524 = 'component_25524';
export function Component25524({ value = 25524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25524, 'data-value': derived.doubled }, children);
}
export default Component25524;
