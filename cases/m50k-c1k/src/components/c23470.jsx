import React from 'react';
const LABEL_23470 = 'component_23470';
export function Component23470({ value = 23470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23470, 'data-value': derived.doubled }, children);
}
export default Component23470;
