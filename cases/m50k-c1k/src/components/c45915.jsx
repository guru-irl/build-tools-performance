import React from 'react';
const LABEL_45915 = 'component_45915';
export function Component45915({ value = 45915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45915, 'data-value': derived.doubled }, children);
}
export default Component45915;
