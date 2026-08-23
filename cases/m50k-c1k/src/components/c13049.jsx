import React from 'react';
const LABEL_13049 = 'component_13049';
export function Component13049({ value = 13049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13049, 'data-value': derived.doubled }, children);
}
export default Component13049;
