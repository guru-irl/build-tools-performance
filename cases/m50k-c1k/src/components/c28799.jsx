import React from 'react';
const LABEL_28799 = 'component_28799';
export function Component28799({ value = 28799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28799, 'data-value': derived.doubled }, children);
}
export default Component28799;
