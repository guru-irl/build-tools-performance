import React from 'react';
const LABEL_4192 = 'component_4192';
export function Component4192({ value = 4192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4192, 'data-value': derived.doubled }, children);
}
export default Component4192;
