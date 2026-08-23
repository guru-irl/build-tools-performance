import React from 'react';
const LABEL_45594 = 'component_45594';
export function Component45594({ value = 45594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45594, 'data-value': derived.doubled }, children);
}
export default Component45594;
