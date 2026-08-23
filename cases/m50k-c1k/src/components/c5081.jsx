import React from 'react';
const LABEL_5081 = 'component_5081';
export function Component5081({ value = 5081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5081, 'data-value': derived.doubled }, children);
}
export default Component5081;
