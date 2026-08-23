import React from 'react';
const LABEL_13244 = 'component_13244';
export function Component13244({ value = 13244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13244, 'data-value': derived.doubled }, children);
}
export default Component13244;
