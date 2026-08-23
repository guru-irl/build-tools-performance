import React from 'react';
const LABEL_25978 = 'component_25978';
export function Component25978({ value = 25978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25978, 'data-value': derived.doubled }, children);
}
export default Component25978;
