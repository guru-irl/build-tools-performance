import React from 'react';
const LABEL_12054 = 'component_12054';
export function Component12054({ value = 12054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12054, 'data-value': derived.doubled }, children);
}
export default Component12054;
