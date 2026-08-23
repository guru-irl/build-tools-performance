import React from 'react';
const LABEL_14522 = 'component_14522';
export function Component14522({ value = 14522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14522, 'data-value': derived.doubled }, children);
}
export default Component14522;
