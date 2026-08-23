import React from 'react';
const LABEL_26804 = 'component_26804';
export function Component26804({ value = 26804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26804, 'data-value': derived.doubled }, children);
}
export default Component26804;
