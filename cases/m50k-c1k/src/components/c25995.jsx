import React from 'react';
const LABEL_25995 = 'component_25995';
export function Component25995({ value = 25995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25995, 'data-value': derived.doubled }, children);
}
export default Component25995;
