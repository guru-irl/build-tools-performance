import React from 'react';
const LABEL_6171 = 'component_6171';
export function Component6171({ value = 6171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6171, 'data-value': derived.doubled }, children);
}
export default Component6171;
