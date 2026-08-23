import React from 'react';
const LABEL_8873 = 'component_8873';
export function Component8873({ value = 8873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8873, 'data-value': derived.doubled }, children);
}
export default Component8873;
