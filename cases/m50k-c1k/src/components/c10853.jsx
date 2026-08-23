import React from 'react';
const LABEL_10853 = 'component_10853';
export function Component10853({ value = 10853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10853, 'data-value': derived.doubled }, children);
}
export default Component10853;
