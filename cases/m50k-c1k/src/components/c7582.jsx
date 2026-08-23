import React from 'react';
const LABEL_7582 = 'component_7582';
export function Component7582({ value = 7582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7582, 'data-value': derived.doubled }, children);
}
export default Component7582;
