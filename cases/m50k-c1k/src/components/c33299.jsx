import React from 'react';
const LABEL_33299 = 'component_33299';
export function Component33299({ value = 33299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33299, 'data-value': derived.doubled }, children);
}
export default Component33299;
