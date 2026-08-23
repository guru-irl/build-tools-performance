import React from 'react';
const LABEL_13418 = 'component_13418';
export function Component13418({ value = 13418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13418, 'data-value': derived.doubled }, children);
}
export default Component13418;
