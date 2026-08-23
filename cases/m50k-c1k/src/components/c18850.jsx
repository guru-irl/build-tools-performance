import React from 'react';
const LABEL_18850 = 'component_18850';
export function Component18850({ value = 18850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18850, 'data-value': derived.doubled }, children);
}
export default Component18850;
