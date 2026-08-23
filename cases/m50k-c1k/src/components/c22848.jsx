import React from 'react';
const LABEL_22848 = 'component_22848';
export function Component22848({ value = 22848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22848, 'data-value': derived.doubled }, children);
}
export default Component22848;
