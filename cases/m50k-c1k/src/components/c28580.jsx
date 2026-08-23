import React from 'react';
const LABEL_28580 = 'component_28580';
export function Component28580({ value = 28580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28580, 'data-value': derived.doubled }, children);
}
export default Component28580;
