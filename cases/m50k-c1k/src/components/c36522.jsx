import React from 'react';
const LABEL_36522 = 'component_36522';
export function Component36522({ value = 36522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36522, 'data-value': derived.doubled }, children);
}
export default Component36522;
