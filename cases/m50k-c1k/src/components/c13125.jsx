import React from 'react';
const LABEL_13125 = 'component_13125';
export function Component13125({ value = 13125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13125, 'data-value': derived.doubled }, children);
}
export default Component13125;
