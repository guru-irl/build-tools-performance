import React from 'react';
const LABEL_12964 = 'component_12964';
export function Component12964({ value = 12964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12964, 'data-value': derived.doubled }, children);
}
export default Component12964;
