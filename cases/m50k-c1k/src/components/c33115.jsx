import React from 'react';
const LABEL_33115 = 'component_33115';
export function Component33115({ value = 33115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33115, 'data-value': derived.doubled }, children);
}
export default Component33115;
