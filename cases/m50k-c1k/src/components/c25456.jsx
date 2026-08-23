import React from 'react';
const LABEL_25456 = 'component_25456';
export function Component25456({ value = 25456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25456, 'data-value': derived.doubled }, children);
}
export default Component25456;
