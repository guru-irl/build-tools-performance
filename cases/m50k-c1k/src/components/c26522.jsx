import React from 'react';
const LABEL_26522 = 'component_26522';
export function Component26522({ value = 26522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26522, 'data-value': derived.doubled }, children);
}
export default Component26522;
