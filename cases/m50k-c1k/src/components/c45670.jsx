import React from 'react';
const LABEL_45670 = 'component_45670';
export function Component45670({ value = 45670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45670, 'data-value': derived.doubled }, children);
}
export default Component45670;
