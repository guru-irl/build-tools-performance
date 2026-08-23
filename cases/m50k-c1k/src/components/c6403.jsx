import React from 'react';
const LABEL_6403 = 'component_6403';
export function Component6403({ value = 6403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6403, 'data-value': derived.doubled }, children);
}
export default Component6403;
