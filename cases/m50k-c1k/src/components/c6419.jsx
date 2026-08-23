import React from 'react';
const LABEL_6419 = 'component_6419';
export function Component6419({ value = 6419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6419, 'data-value': derived.doubled }, children);
}
export default Component6419;
