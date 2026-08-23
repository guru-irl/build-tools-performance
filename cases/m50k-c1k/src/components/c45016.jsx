import React from 'react';
const LABEL_45016 = 'component_45016';
export function Component45016({ value = 45016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45016, 'data-value': derived.doubled }, children);
}
export default Component45016;
