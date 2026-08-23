import React from 'react';
const LABEL_26585 = 'component_26585';
export function Component26585({ value = 26585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26585, 'data-value': derived.doubled }, children);
}
export default Component26585;
