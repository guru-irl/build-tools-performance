import React from 'react';
const LABEL_45932 = 'component_45932';
export function Component45932({ value = 45932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45932, 'data-value': derived.doubled }, children);
}
export default Component45932;
