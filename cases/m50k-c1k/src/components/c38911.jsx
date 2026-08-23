import React from 'react';
const LABEL_38911 = 'component_38911';
export function Component38911({ value = 38911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38911, 'data-value': derived.doubled }, children);
}
export default Component38911;
