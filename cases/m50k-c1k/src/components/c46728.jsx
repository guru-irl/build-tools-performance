import React from 'react';
const LABEL_46728 = 'component_46728';
export function Component46728({ value = 46728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46728, 'data-value': derived.doubled }, children);
}
export default Component46728;
