import React from 'react';
const LABEL_45795 = 'component_45795';
export function Component45795({ value = 45795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45795, 'data-value': derived.doubled }, children);
}
export default Component45795;
