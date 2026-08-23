import React from 'react';
const LABEL_39943 = 'component_39943';
export function Component39943({ value = 39943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39943, 'data-value': derived.doubled }, children);
}
export default Component39943;
