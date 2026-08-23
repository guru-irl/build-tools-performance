import React from 'react';
const LABEL_42738 = 'component_42738';
export function Component42738({ value = 42738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42738, 'data-value': derived.doubled }, children);
}
export default Component42738;
