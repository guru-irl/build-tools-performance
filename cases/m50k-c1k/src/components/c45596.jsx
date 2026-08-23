import React from 'react';
const LABEL_45596 = 'component_45596';
export function Component45596({ value = 45596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45596, 'data-value': derived.doubled }, children);
}
export default Component45596;
