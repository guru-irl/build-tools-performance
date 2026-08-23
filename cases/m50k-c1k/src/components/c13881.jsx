import React from 'react';
const LABEL_13881 = 'component_13881';
export function Component13881({ value = 13881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13881, 'data-value': derived.doubled }, children);
}
export default Component13881;
