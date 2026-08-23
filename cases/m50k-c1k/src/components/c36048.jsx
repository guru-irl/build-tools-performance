import React from 'react';
const LABEL_36048 = 'component_36048';
export function Component36048({ value = 36048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36048, 'data-value': derived.doubled }, children);
}
export default Component36048;
