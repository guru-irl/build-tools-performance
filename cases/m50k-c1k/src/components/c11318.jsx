import React from 'react';
const LABEL_11318 = 'component_11318';
export function Component11318({ value = 11318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11318, 'data-value': derived.doubled }, children);
}
export default Component11318;
