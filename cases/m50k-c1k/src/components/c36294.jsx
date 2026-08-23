import React from 'react';
const LABEL_36294 = 'component_36294';
export function Component36294({ value = 36294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36294, 'data-value': derived.doubled }, children);
}
export default Component36294;
