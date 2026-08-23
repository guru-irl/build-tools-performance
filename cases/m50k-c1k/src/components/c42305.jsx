import React from 'react';
const LABEL_42305 = 'component_42305';
export function Component42305({ value = 42305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42305, 'data-value': derived.doubled }, children);
}
export default Component42305;
