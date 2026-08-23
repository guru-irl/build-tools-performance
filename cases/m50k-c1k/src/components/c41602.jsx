import React from 'react';
const LABEL_41602 = 'component_41602';
export function Component41602({ value = 41602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41602, 'data-value': derived.doubled }, children);
}
export default Component41602;
