import React from 'react';
const LABEL_7603 = 'component_7603';
export function Component7603({ value = 7603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7603, 'data-value': derived.doubled }, children);
}
export default Component7603;
