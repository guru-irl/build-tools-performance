import React from 'react';
const LABEL_45557 = 'component_45557';
export function Component45557({ value = 45557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45557, 'data-value': derived.doubled }, children);
}
export default Component45557;
