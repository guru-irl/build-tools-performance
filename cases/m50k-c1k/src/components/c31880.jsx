import React from 'react';
const LABEL_31880 = 'component_31880';
export function Component31880({ value = 31880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31880, 'data-value': derived.doubled }, children);
}
export default Component31880;
