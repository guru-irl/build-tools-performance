import React from 'react';
const LABEL_16009 = 'component_16009';
export function Component16009({ value = 16009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16009, 'data-value': derived.doubled }, children);
}
export default Component16009;
