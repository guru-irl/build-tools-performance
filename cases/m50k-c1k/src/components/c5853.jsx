import React from 'react';
const LABEL_5853 = 'component_5853';
export function Component5853({ value = 5853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5853, 'data-value': derived.doubled }, children);
}
export default Component5853;
