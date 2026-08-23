import React from 'react';
const LABEL_33470 = 'component_33470';
export function Component33470({ value = 33470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33470, 'data-value': derived.doubled }, children);
}
export default Component33470;
