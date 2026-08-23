import React from 'react';
const LABEL_6888 = 'component_6888';
export function Component6888({ value = 6888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6888, 'data-value': derived.doubled }, children);
}
export default Component6888;
