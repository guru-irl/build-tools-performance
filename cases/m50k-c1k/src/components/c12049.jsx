import React from 'react';
const LABEL_12049 = 'component_12049';
export function Component12049({ value = 12049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12049, 'data-value': derived.doubled }, children);
}
export default Component12049;
