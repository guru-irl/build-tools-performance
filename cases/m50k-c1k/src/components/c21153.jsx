import React from 'react';
const LABEL_21153 = 'component_21153';
export function Component21153({ value = 21153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21153, 'data-value': derived.doubled }, children);
}
export default Component21153;
