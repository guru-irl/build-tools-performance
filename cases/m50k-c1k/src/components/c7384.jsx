import React from 'react';
const LABEL_7384 = 'component_7384';
export function Component7384({ value = 7384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7384, 'data-value': derived.doubled }, children);
}
export default Component7384;
