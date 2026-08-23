import React from 'react';
const LABEL_10949 = 'component_10949';
export function Component10949({ value = 10949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10949, 'data-value': derived.doubled }, children);
}
export default Component10949;
