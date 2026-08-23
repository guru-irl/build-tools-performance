import React from 'react';
const LABEL_33716 = 'component_33716';
export function Component33716({ value = 33716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33716, 'data-value': derived.doubled }, children);
}
export default Component33716;
