import React from 'react';
const LABEL_41859 = 'component_41859';
export function Component41859({ value = 41859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41859, 'data-value': derived.doubled }, children);
}
export default Component41859;
