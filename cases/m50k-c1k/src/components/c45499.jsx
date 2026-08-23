import React from 'react';
const LABEL_45499 = 'component_45499';
export function Component45499({ value = 45499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45499, 'data-value': derived.doubled }, children);
}
export default Component45499;
