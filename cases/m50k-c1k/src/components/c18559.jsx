import React from 'react';
const LABEL_18559 = 'component_18559';
export function Component18559({ value = 18559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18559, 'data-value': derived.doubled }, children);
}
export default Component18559;
