import React from 'react';
const LABEL_13302 = 'component_13302';
export function Component13302({ value = 13302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13302, 'data-value': derived.doubled }, children);
}
export default Component13302;
