import React from 'react';
const LABEL_42578 = 'component_42578';
export function Component42578({ value = 42578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42578, 'data-value': derived.doubled }, children);
}
export default Component42578;
