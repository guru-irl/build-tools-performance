import React from 'react';
const LABEL_6835 = 'component_6835';
export function Component6835({ value = 6835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6835, 'data-value': derived.doubled }, children);
}
export default Component6835;
