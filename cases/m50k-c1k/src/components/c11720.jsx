import React from 'react';
const LABEL_11720 = 'component_11720';
export function Component11720({ value = 11720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11720, 'data-value': derived.doubled }, children);
}
export default Component11720;
