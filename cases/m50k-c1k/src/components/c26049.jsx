import React from 'react';
const LABEL_26049 = 'component_26049';
export function Component26049({ value = 26049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26049, 'data-value': derived.doubled }, children);
}
export default Component26049;
