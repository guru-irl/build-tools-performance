import React from 'react';
const LABEL_28945 = 'component_28945';
export function Component28945({ value = 28945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28945, 'data-value': derived.doubled }, children);
}
export default Component28945;
