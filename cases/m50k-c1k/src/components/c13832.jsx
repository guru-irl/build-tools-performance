import React from 'react';
const LABEL_13832 = 'component_13832';
export function Component13832({ value = 13832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13832, 'data-value': derived.doubled }, children);
}
export default Component13832;
