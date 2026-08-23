import React from 'react';
const LABEL_7635 = 'component_7635';
export function Component7635({ value = 7635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7635, 'data-value': derived.doubled }, children);
}
export default Component7635;
