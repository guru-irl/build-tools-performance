import React from 'react';
const LABEL_31059 = 'component_31059';
export function Component31059({ value = 31059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31059, 'data-value': derived.doubled }, children);
}
export default Component31059;
