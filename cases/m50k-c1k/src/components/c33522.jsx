import React from 'react';
const LABEL_33522 = 'component_33522';
export function Component33522({ value = 33522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33522, 'data-value': derived.doubled }, children);
}
export default Component33522;
