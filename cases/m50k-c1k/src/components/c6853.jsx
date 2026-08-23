import React from 'react';
const LABEL_6853 = 'component_6853';
export function Component6853({ value = 6853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6853, 'data-value': derived.doubled }, children);
}
export default Component6853;
