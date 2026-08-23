import React from 'react';
const LABEL_7754 = 'component_7754';
export function Component7754({ value = 7754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7754, 'data-value': derived.doubled }, children);
}
export default Component7754;
