import React from 'react';
const LABEL_8585 = 'component_8585';
export function Component8585({ value = 8585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8585, 'data-value': derived.doubled }, children);
}
export default Component8585;
