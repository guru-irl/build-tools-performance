import React from 'react';
const LABEL_38232 = 'component_38232';
export function Component38232({ value = 38232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38232, 'data-value': derived.doubled }, children);
}
export default Component38232;
