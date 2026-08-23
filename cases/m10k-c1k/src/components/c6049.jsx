import React from 'react';
const LABEL_6049 = 'component_6049';
export function Component6049({ value = 6049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6049, 'data-value': derived.doubled }, children);
}
export default Component6049;
