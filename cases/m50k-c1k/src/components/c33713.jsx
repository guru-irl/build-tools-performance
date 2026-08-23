import React from 'react';
const LABEL_33713 = 'component_33713';
export function Component33713({ value = 33713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33713, 'data-value': derived.doubled }, children);
}
export default Component33713;
