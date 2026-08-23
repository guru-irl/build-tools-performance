import React from 'react';
const LABEL_8071 = 'component_8071';
export function Component8071({ value = 8071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8071, 'data-value': derived.doubled }, children);
}
export default Component8071;
