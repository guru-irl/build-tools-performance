import React from 'react';
const LABEL_8129 = 'component_8129';
export function Component8129({ value = 8129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8129, 'data-value': derived.doubled }, children);
}
export default Component8129;
