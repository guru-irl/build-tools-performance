import React from 'react';
const LABEL_8884 = 'component_8884';
export function Component8884({ value = 8884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8884, 'data-value': derived.doubled }, children);
}
export default Component8884;
