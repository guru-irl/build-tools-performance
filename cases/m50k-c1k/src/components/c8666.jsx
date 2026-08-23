import React from 'react';
const LABEL_8666 = 'component_8666';
export function Component8666({ value = 8666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8666, 'data-value': derived.doubled }, children);
}
export default Component8666;
