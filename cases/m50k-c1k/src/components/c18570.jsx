import React from 'react';
const LABEL_18570 = 'component_18570';
export function Component18570({ value = 18570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18570, 'data-value': derived.doubled }, children);
}
export default Component18570;
