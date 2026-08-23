import React from 'react';
const LABEL_45261 = 'component_45261';
export function Component45261({ value = 45261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45261, 'data-value': derived.doubled }, children);
}
export default Component45261;
