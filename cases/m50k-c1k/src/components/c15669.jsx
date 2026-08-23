import React from 'react';
const LABEL_15669 = 'component_15669';
export function Component15669({ value = 15669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15669, 'data-value': derived.doubled }, children);
}
export default Component15669;
