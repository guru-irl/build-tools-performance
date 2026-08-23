import React from 'react';
const LABEL_45192 = 'component_45192';
export function Component45192({ value = 45192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45192, 'data-value': derived.doubled }, children);
}
export default Component45192;
