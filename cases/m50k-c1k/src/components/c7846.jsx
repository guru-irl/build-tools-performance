import React from 'react';
const LABEL_7846 = 'component_7846';
export function Component7846({ value = 7846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7846, 'data-value': derived.doubled }, children);
}
export default Component7846;
