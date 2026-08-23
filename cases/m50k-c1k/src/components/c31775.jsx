import React from 'react';
const LABEL_31775 = 'component_31775';
export function Component31775({ value = 31775, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31775, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31775, 'data-value': derived.doubled }, children);
}
export default Component31775;
