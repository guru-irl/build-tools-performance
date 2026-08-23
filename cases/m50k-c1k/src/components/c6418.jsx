import React from 'react';
const LABEL_6418 = 'component_6418';
export function Component6418({ value = 6418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6418, 'data-value': derived.doubled }, children);
}
export default Component6418;
