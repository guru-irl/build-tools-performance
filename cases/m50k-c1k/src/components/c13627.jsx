import React from 'react';
const LABEL_13627 = 'component_13627';
export function Component13627({ value = 13627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13627, 'data-value': derived.doubled }, children);
}
export default Component13627;
