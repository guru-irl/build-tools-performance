import React from 'react';
const LABEL_12235 = 'component_12235';
export function Component12235({ value = 12235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12235, 'data-value': derived.doubled }, children);
}
export default Component12235;
