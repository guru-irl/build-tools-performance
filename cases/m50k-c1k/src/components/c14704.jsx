import React from 'react';
const LABEL_14704 = 'component_14704';
export function Component14704({ value = 14704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14704, 'data-value': derived.doubled }, children);
}
export default Component14704;
