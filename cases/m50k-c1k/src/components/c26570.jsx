import React from 'react';
const LABEL_26570 = 'component_26570';
export function Component26570({ value = 26570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26570, 'data-value': derived.doubled }, children);
}
export default Component26570;
