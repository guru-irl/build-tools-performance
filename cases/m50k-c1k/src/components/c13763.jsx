import React from 'react';
const LABEL_13763 = 'component_13763';
export function Component13763({ value = 13763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13763, 'data-value': derived.doubled }, children);
}
export default Component13763;
