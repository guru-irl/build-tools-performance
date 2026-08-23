import React from 'react';
const LABEL_5593 = 'component_5593';
export function Component5593({ value = 5593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5593, 'data-value': derived.doubled }, children);
}
export default Component5593;
