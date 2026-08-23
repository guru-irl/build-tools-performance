import React from 'react';
const LABEL_32270 = 'component_32270';
export function Component32270({ value = 32270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32270, 'data-value': derived.doubled }, children);
}
export default Component32270;
