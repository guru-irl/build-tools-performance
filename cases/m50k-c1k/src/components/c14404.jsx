import React from 'react';
const LABEL_14404 = 'component_14404';
export function Component14404({ value = 14404, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14404, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14404, 'data-value': derived.doubled }, children);
}
export default Component14404;
