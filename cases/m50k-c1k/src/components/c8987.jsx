import React from 'react';
const LABEL_8987 = 'component_8987';
export function Component8987({ value = 8987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8987, 'data-value': derived.doubled }, children);
}
export default Component8987;
