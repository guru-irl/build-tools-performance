import React from 'react';
const LABEL_3987 = 'component_3987';
export function Component3987({ value = 3987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3987, 'data-value': derived.doubled }, children);
}
export default Component3987;
