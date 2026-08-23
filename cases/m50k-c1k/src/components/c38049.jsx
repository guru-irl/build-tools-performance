import React from 'react';
const LABEL_38049 = 'component_38049';
export function Component38049({ value = 38049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38049, 'data-value': derived.doubled }, children);
}
export default Component38049;
