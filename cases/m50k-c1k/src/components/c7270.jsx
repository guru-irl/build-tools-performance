import React from 'react';
const LABEL_7270 = 'component_7270';
export function Component7270({ value = 7270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7270, 'data-value': derived.doubled }, children);
}
export default Component7270;
