import React from 'react';
const LABEL_10217 = 'component_10217';
export function Component10217({ value = 10217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10217, 'data-value': derived.doubled }, children);
}
export default Component10217;
