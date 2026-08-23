import React from 'react';
const LABEL_21657 = 'component_21657';
export function Component21657({ value = 21657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21657, 'data-value': derived.doubled }, children);
}
export default Component21657;
