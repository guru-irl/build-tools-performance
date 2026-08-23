import React from 'react';
const LABEL_277 = 'component_277';
export function Component277({ value = 277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_277, 'data-value': derived.doubled }, children);
}
export default Component277;
