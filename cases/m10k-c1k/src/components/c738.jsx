import React from 'react';
const LABEL_738 = 'component_738';
export function Component738({ value = 738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_738, 'data-value': derived.doubled }, children);
}
export default Component738;
