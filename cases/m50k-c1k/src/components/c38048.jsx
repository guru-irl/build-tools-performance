import React from 'react';
const LABEL_38048 = 'component_38048';
export function Component38048({ value = 38048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38048, 'data-value': derived.doubled }, children);
}
export default Component38048;
