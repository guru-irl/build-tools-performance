import React from 'react';
const LABEL_12239 = 'component_12239';
export function Component12239({ value = 12239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12239, 'data-value': derived.doubled }, children);
}
export default Component12239;
