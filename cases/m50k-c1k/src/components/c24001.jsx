import React from 'react';
const LABEL_24001 = 'component_24001';
export function Component24001({ value = 24001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24001, 'data-value': derived.doubled }, children);
}
export default Component24001;
