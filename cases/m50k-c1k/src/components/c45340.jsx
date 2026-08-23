import React from 'react';
const LABEL_45340 = 'component_45340';
export function Component45340({ value = 45340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45340, 'data-value': derived.doubled }, children);
}
export default Component45340;
