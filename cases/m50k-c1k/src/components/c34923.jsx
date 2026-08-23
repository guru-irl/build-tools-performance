import React from 'react';
const LABEL_34923 = 'component_34923';
export function Component34923({ value = 34923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34923, 'data-value': derived.doubled }, children);
}
export default Component34923;
