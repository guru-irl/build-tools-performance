import React from 'react';
const LABEL_26048 = 'component_26048';
export function Component26048({ value = 26048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26048, 'data-value': derived.doubled }, children);
}
export default Component26048;
