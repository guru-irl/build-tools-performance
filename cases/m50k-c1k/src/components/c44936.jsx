import React from 'react';
const LABEL_44936 = 'component_44936';
export function Component44936({ value = 44936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44936, 'data-value': derived.doubled }, children);
}
export default Component44936;
