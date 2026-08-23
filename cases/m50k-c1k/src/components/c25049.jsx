import React from 'react';
const LABEL_25049 = 'component_25049';
export function Component25049({ value = 25049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25049, 'data-value': derived.doubled }, children);
}
export default Component25049;
