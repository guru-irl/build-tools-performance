import React from 'react';
const LABEL_888 = 'component_888';
export function Component888({ value = 888, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_888, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_888, 'data-value': derived.doubled }, children);
}
export default Component888;
