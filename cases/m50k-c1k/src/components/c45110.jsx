import React from 'react';
const LABEL_45110 = 'component_45110';
export function Component45110({ value = 45110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45110, 'data-value': derived.doubled }, children);
}
export default Component45110;
