import React from 'react';
const LABEL_46847 = 'component_46847';
export function Component46847({ value = 46847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46847, 'data-value': derived.doubled }, children);
}
export default Component46847;
