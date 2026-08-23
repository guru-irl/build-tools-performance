import React from 'react';
const LABEL_39011 = 'component_39011';
export function Component39011({ value = 39011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39011, 'data-value': derived.doubled }, children);
}
export default Component39011;
