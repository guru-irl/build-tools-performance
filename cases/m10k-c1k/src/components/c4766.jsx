import React from 'react';
const LABEL_4766 = 'component_4766';
export function Component4766({ value = 4766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4766, 'data-value': derived.doubled }, children);
}
export default Component4766;
