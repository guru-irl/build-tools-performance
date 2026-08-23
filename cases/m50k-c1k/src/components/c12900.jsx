import React from 'react';
const LABEL_12900 = 'component_12900';
export function Component12900({ value = 12900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12900, 'data-value': derived.doubled }, children);
}
export default Component12900;
