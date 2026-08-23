import React from 'react';
const LABEL_35936 = 'component_35936';
export function Component35936({ value = 35936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35936, 'data-value': derived.doubled }, children);
}
export default Component35936;
