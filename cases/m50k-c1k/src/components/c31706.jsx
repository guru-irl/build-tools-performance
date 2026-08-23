import React from 'react';
const LABEL_31706 = 'component_31706';
export function Component31706({ value = 31706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31706, 'data-value': derived.doubled }, children);
}
export default Component31706;
