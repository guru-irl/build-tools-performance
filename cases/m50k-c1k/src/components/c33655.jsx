import React from 'react';
const LABEL_33655 = 'component_33655';
export function Component33655({ value = 33655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33655, 'data-value': derived.doubled }, children);
}
export default Component33655;
