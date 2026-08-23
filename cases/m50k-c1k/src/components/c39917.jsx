import React from 'react';
const LABEL_39917 = 'component_39917';
export function Component39917({ value = 39917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39917, 'data-value': derived.doubled }, children);
}
export default Component39917;
