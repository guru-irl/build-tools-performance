import React from 'react';
const LABEL_10979 = 'component_10979';
export function Component10979({ value = 10979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10979, 'data-value': derived.doubled }, children);
}
export default Component10979;
