import React from 'react';
const LABEL_7559 = 'component_7559';
export function Component7559({ value = 7559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7559, 'data-value': derived.doubled }, children);
}
export default Component7559;
