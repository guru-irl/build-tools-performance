import React from 'react';
const LABEL_13301 = 'component_13301';
export function Component13301({ value = 13301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13301, 'data-value': derived.doubled }, children);
}
export default Component13301;
