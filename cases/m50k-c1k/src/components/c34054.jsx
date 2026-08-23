import React from 'react';
const LABEL_34054 = 'component_34054';
export function Component34054({ value = 34054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34054, 'data-value': derived.doubled }, children);
}
export default Component34054;
