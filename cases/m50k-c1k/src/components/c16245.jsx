import React from 'react';
const LABEL_16245 = 'component_16245';
export function Component16245({ value = 16245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16245, 'data-value': derived.doubled }, children);
}
export default Component16245;
