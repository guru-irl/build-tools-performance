import React from 'react';
const LABEL_31829 = 'component_31829';
export function Component31829({ value = 31829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31829, 'data-value': derived.doubled }, children);
}
export default Component31829;
