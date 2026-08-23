import React from 'react';
const LABEL_26559 = 'component_26559';
export function Component26559({ value = 26559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26559, 'data-value': derived.doubled }, children);
}
export default Component26559;
