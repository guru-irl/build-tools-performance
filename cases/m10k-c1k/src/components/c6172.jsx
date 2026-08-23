import React from 'react';
const LABEL_6172 = 'component_6172';
export function Component6172({ value = 6172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6172, 'data-value': derived.doubled }, children);
}
export default Component6172;
