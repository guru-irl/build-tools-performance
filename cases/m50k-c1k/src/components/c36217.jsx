import React from 'react';
const LABEL_36217 = 'component_36217';
export function Component36217({ value = 36217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36217, 'data-value': derived.doubled }, children);
}
export default Component36217;
