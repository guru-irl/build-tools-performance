import React from 'react';
const LABEL_26079 = 'component_26079';
export function Component26079({ value = 26079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26079, 'data-value': derived.doubled }, children);
}
export default Component26079;
