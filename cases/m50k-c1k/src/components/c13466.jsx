import React from 'react';
const LABEL_13466 = 'component_13466';
export function Component13466({ value = 13466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13466, 'data-value': derived.doubled }, children);
}
export default Component13466;
