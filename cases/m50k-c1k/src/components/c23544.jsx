import React from 'react';
const LABEL_23544 = 'component_23544';
export function Component23544({ value = 23544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23544, 'data-value': derived.doubled }, children);
}
export default Component23544;
