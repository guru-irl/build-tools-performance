import React from 'react';
const LABEL_21987 = 'component_21987';
export function Component21987({ value = 21987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21987, 'data-value': derived.doubled }, children);
}
export default Component21987;
