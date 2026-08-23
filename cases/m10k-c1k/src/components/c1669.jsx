import React from 'react';
const LABEL_1669 = 'component_1669';
export function Component1669({ value = 1669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1669, 'data-value': derived.doubled }, children);
}
export default Component1669;
