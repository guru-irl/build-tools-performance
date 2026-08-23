import React from 'react';
const LABEL_33880 = 'component_33880';
export function Component33880({ value = 33880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33880, 'data-value': derived.doubled }, children);
}
export default Component33880;
