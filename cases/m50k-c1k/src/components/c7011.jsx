import React from 'react';
const LABEL_7011 = 'component_7011';
export function Component7011({ value = 7011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7011, 'data-value': derived.doubled }, children);
}
export default Component7011;
