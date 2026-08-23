import React from 'react';
const LABEL_21615 = 'component_21615';
export function Component21615({ value = 21615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21615, 'data-value': derived.doubled }, children);
}
export default Component21615;
