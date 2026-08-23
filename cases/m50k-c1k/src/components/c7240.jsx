import React from 'react';
const LABEL_7240 = 'component_7240';
export function Component7240({ value = 7240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7240, 'data-value': derived.doubled }, children);
}
export default Component7240;
