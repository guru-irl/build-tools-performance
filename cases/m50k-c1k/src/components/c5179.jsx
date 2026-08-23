import React from 'react';
const LABEL_5179 = 'component_5179';
export function Component5179({ value = 5179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5179, 'data-value': derived.doubled }, children);
}
export default Component5179;
