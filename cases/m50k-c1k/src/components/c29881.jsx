import React from 'react';
const LABEL_29881 = 'component_29881';
export function Component29881({ value = 29881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29881, 'data-value': derived.doubled }, children);
}
export default Component29881;
