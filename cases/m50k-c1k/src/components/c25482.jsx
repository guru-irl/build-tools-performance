import React from 'react';
const LABEL_25482 = 'component_25482';
export function Component25482({ value = 25482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25482, 'data-value': derived.doubled }, children);
}
export default Component25482;
