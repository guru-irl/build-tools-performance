import React from 'react';
const LABEL_36936 = 'component_36936';
export function Component36936({ value = 36936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36936, 'data-value': derived.doubled }, children);
}
export default Component36936;
