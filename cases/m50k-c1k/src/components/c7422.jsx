import React from 'react';
const LABEL_7422 = 'component_7422';
export function Component7422({ value = 7422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7422, 'data-value': derived.doubled }, children);
}
export default Component7422;
