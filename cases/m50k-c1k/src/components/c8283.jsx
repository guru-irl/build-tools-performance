import React from 'react';
const LABEL_8283 = 'component_8283';
export function Component8283({ value = 8283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8283, 'data-value': derived.doubled }, children);
}
export default Component8283;
