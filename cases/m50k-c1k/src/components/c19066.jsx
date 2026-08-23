import React from 'react';
const LABEL_19066 = 'component_19066';
export function Component19066({ value = 19066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19066, 'data-value': derived.doubled }, children);
}
export default Component19066;
