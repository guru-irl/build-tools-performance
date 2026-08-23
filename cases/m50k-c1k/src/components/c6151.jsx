import React from 'react';
const LABEL_6151 = 'component_6151';
export function Component6151({ value = 6151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6151, 'data-value': derived.doubled }, children);
}
export default Component6151;
