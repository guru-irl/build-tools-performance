import React from 'react';
const LABEL_45205 = 'component_45205';
export function Component45205({ value = 45205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45205, 'data-value': derived.doubled }, children);
}
export default Component45205;
