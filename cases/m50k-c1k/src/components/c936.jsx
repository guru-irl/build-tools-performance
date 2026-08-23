import React from 'react';
const LABEL_936 = 'component_936';
export function Component936({ value = 936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_936, 'data-value': derived.doubled }, children);
}
export default Component936;
