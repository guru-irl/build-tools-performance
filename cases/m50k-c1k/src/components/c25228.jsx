import React from 'react';
const LABEL_25228 = 'component_25228';
export function Component25228({ value = 25228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25228, 'data-value': derived.doubled }, children);
}
export default Component25228;
