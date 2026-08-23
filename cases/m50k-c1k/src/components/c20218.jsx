import React from 'react';
const LABEL_20218 = 'component_20218';
export function Component20218({ value = 20218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20218, 'data-value': derived.doubled }, children);
}
export default Component20218;
