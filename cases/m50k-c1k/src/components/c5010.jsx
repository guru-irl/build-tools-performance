import React from 'react';
const LABEL_5010 = 'component_5010';
export function Component5010({ value = 5010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5010, 'data-value': derived.doubled }, children);
}
export default Component5010;
