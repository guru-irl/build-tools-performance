import React from 'react';
const LABEL_35111 = 'component_35111';
export function Component35111({ value = 35111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35111, 'data-value': derived.doubled }, children);
}
export default Component35111;
