import React from 'react';
const LABEL_5411 = 'component_5411';
export function Component5411({ value = 5411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5411, 'data-value': derived.doubled }, children);
}
export default Component5411;
