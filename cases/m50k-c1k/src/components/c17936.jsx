import React from 'react';
const LABEL_17936 = 'component_17936';
export function Component17936({ value = 17936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17936, 'data-value': derived.doubled }, children);
}
export default Component17936;
