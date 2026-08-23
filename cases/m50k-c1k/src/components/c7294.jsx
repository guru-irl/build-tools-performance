import React from 'react';
const LABEL_7294 = 'component_7294';
export function Component7294({ value = 7294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7294, 'data-value': derived.doubled }, children);
}
export default Component7294;
