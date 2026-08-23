import React from 'react';
const LABEL_11940 = 'component_11940';
export function Component11940({ value = 11940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11940, 'data-value': derived.doubled }, children);
}
export default Component11940;
