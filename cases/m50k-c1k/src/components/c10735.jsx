import React from 'react';
const LABEL_10735 = 'component_10735';
export function Component10735({ value = 10735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10735, 'data-value': derived.doubled }, children);
}
export default Component10735;
