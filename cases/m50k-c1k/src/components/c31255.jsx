import React from 'react';
const LABEL_31255 = 'component_31255';
export function Component31255({ value = 31255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31255, 'data-value': derived.doubled }, children);
}
export default Component31255;
