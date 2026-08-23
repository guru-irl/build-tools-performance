import React from 'react';
const LABEL_18048 = 'component_18048';
export function Component18048({ value = 18048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18048, 'data-value': derived.doubled }, children);
}
export default Component18048;
