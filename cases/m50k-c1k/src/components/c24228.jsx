import React from 'react';
const LABEL_24228 = 'component_24228';
export function Component24228({ value = 24228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24228, 'data-value': derived.doubled }, children);
}
export default Component24228;
