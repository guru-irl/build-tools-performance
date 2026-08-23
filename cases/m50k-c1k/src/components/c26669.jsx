import React from 'react';
const LABEL_26669 = 'component_26669';
export function Component26669({ value = 26669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26669, 'data-value': derived.doubled }, children);
}
export default Component26669;
