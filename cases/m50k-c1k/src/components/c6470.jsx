import React from 'react';
const LABEL_6470 = 'component_6470';
export function Component6470({ value = 6470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6470, 'data-value': derived.doubled }, children);
}
export default Component6470;
