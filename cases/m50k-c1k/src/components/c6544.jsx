import React from 'react';
const LABEL_6544 = 'component_6544';
export function Component6544({ value = 6544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6544, 'data-value': derived.doubled }, children);
}
export default Component6544;
