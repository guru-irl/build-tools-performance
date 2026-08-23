import React from 'react';
const LABEL_24229 = 'component_24229';
export function Component24229({ value = 24229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24229, 'data-value': derived.doubled }, children);
}
export default Component24229;
