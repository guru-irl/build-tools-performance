import React from 'react';
const LABEL_31734 = 'component_31734';
export function Component31734({ value = 31734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31734, 'data-value': derived.doubled }, children);
}
export default Component31734;
