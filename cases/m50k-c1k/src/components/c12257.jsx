import React from 'react';
const LABEL_12257 = 'component_12257';
export function Component12257({ value = 12257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12257, 'data-value': derived.doubled }, children);
}
export default Component12257;
