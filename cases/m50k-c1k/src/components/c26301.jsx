import React from 'react';
const LABEL_26301 = 'component_26301';
export function Component26301({ value = 26301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26301, 'data-value': derived.doubled }, children);
}
export default Component26301;
