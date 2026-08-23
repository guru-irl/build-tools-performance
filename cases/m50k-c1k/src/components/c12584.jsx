import React from 'react';
const LABEL_12584 = 'component_12584';
export function Component12584({ value = 12584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12584, 'data-value': derived.doubled }, children);
}
export default Component12584;
