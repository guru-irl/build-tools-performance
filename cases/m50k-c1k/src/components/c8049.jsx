import React from 'react';
const LABEL_8049 = 'component_8049';
export function Component8049({ value = 8049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8049, 'data-value': derived.doubled }, children);
}
export default Component8049;
