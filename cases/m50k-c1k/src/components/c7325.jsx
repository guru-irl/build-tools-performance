import React from 'react';
const LABEL_7325 = 'component_7325';
export function Component7325({ value = 7325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7325, 'data-value': derived.doubled }, children);
}
export default Component7325;
