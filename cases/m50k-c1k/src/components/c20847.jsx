import React from 'react';
const LABEL_20847 = 'component_20847';
export function Component20847({ value = 20847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20847, 'data-value': derived.doubled }, children);
}
export default Component20847;
