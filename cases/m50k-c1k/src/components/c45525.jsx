import React from 'react';
const LABEL_45525 = 'component_45525';
export function Component45525({ value = 45525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45525, 'data-value': derived.doubled }, children);
}
export default Component45525;
