import React from 'react';
const LABEL_5117 = 'component_5117';
export function Component5117({ value = 5117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5117, 'data-value': derived.doubled }, children);
}
export default Component5117;
