import React from 'react';
const LABEL_36066 = 'component_36066';
export function Component36066({ value = 36066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36066, 'data-value': derived.doubled }, children);
}
export default Component36066;
