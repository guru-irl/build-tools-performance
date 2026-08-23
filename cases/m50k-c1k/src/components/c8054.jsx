import React from 'react';
const LABEL_8054 = 'component_8054';
export function Component8054({ value = 8054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8054, 'data-value': derived.doubled }, children);
}
export default Component8054;
