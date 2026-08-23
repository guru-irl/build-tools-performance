import React from 'react';
const LABEL_46419 = 'component_46419';
export function Component46419({ value = 46419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46419, 'data-value': derived.doubled }, children);
}
export default Component46419;
