import React from 'react';
const LABEL_10261 = 'component_10261';
export function Component10261({ value = 10261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10261, 'data-value': derived.doubled }, children);
}
export default Component10261;
