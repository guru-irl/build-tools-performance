import React from 'react';
const LABEL_7419 = 'component_7419';
export function Component7419({ value = 7419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7419, 'data-value': derived.doubled }, children);
}
export default Component7419;
