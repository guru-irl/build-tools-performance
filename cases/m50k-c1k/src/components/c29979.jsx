import React from 'react';
const LABEL_29979 = 'component_29979';
export function Component29979({ value = 29979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29979, 'data-value': derived.doubled }, children);
}
export default Component29979;
