import React from 'react';
const LABEL_13749 = 'component_13749';
export function Component13749({ value = 13749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13749, 'data-value': derived.doubled }, children);
}
export default Component13749;
