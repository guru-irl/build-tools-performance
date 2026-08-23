import React from 'react';
const LABEL_31372 = 'component_31372';
export function Component31372({ value = 31372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31372, 'data-value': derived.doubled }, children);
}
export default Component31372;
