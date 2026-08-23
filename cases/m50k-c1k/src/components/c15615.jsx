import React from 'react';
const LABEL_15615 = 'component_15615';
export function Component15615({ value = 15615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15615, 'data-value': derived.doubled }, children);
}
export default Component15615;
