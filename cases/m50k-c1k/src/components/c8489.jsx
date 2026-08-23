import React from 'react';
const LABEL_8489 = 'component_8489';
export function Component8489({ value = 8489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8489, 'data-value': derived.doubled }, children);
}
export default Component8489;
