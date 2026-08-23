import React from 'react';
const LABEL_15657 = 'component_15657';
export function Component15657({ value = 15657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15657, 'data-value': derived.doubled }, children);
}
export default Component15657;
