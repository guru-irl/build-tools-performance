import React from 'react';
const LABEL_7914 = 'component_7914';
export function Component7914({ value = 7914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7914, 'data-value': derived.doubled }, children);
}
export default Component7914;
