import React from 'react';
const LABEL_18469 = 'component_18469';
export function Component18469({ value = 18469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18469, 'data-value': derived.doubled }, children);
}
export default Component18469;
