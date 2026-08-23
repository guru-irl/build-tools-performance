import React from 'react';
const LABEL_26362 = 'component_26362';
export function Component26362({ value = 26362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26362, 'data-value': derived.doubled }, children);
}
export default Component26362;
