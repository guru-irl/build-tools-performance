import React from 'react';
const LABEL_26816 = 'component_26816';
export function Component26816({ value = 26816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26816, 'data-value': derived.doubled }, children);
}
export default Component26816;
