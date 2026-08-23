import React from 'react';
const LABEL_34672 = 'component_34672';
export function Component34672({ value = 34672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34672, 'data-value': derived.doubled }, children);
}
export default Component34672;
