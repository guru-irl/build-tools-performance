import React from 'react';
const LABEL_14499 = 'component_14499';
export function Component14499({ value = 14499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14499, 'data-value': derived.doubled }, children);
}
export default Component14499;
