import React from 'react';
const LABEL_26283 = 'component_26283';
export function Component26283({ value = 26283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26283, 'data-value': derived.doubled }, children);
}
export default Component26283;
