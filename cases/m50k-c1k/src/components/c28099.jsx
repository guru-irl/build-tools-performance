import React from 'react';
const LABEL_28099 = 'component_28099';
export function Component28099({ value = 28099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28099, 'data-value': derived.doubled }, children);
}
export default Component28099;
