import React from 'react';
const LABEL_45087 = 'component_45087';
export function Component45087({ value = 45087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45087, 'data-value': derived.doubled }, children);
}
export default Component45087;
