import React from 'react';
const LABEL_22570 = 'component_22570';
export function Component22570({ value = 22570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22570, 'data-value': derived.doubled }, children);
}
export default Component22570;
