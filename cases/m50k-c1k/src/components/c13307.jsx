import React from 'react';
const LABEL_13307 = 'component_13307';
export function Component13307({ value = 13307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13307, 'data-value': derived.doubled }, children);
}
export default Component13307;
