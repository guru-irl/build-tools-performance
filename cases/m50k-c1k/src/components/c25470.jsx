import React from 'react';
const LABEL_25470 = 'component_25470';
export function Component25470({ value = 25470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25470, 'data-value': derived.doubled }, children);
}
export default Component25470;
