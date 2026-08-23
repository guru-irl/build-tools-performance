import React from 'react';
const LABEL_43713 = 'component_43713';
export function Component43713({ value = 43713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43713, 'data-value': derived.doubled }, children);
}
export default Component43713;
