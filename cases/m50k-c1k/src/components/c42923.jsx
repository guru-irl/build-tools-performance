import React from 'react';
const LABEL_42923 = 'component_42923';
export function Component42923({ value = 42923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42923, 'data-value': derived.doubled }, children);
}
export default Component42923;
