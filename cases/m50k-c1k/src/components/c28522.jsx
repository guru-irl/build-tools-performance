import React from 'react';
const LABEL_28522 = 'component_28522';
export function Component28522({ value = 28522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28522, 'data-value': derived.doubled }, children);
}
export default Component28522;
