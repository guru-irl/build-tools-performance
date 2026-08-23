import React from 'react';
const LABEL_14901 = 'component_14901';
export function Component14901({ value = 14901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14901, 'data-value': derived.doubled }, children);
}
export default Component14901;
