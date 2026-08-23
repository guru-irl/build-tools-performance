import React from 'react';
const LABEL_13011 = 'component_13011';
export function Component13011({ value = 13011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13011, 'data-value': derived.doubled }, children);
}
export default Component13011;
