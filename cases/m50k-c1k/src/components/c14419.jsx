import React from 'react';
const LABEL_14419 = 'component_14419';
export function Component14419({ value = 14419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14419, 'data-value': derived.doubled }, children);
}
export default Component14419;
