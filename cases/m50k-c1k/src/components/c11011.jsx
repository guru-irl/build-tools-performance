import React from 'react';
const LABEL_11011 = 'component_11011';
export function Component11011({ value = 11011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11011, 'data-value': derived.doubled }, children);
}
export default Component11011;
