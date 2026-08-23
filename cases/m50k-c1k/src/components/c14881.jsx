import React from 'react';
const LABEL_14881 = 'component_14881';
export function Component14881({ value = 14881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14881, 'data-value': derived.doubled }, children);
}
export default Component14881;
