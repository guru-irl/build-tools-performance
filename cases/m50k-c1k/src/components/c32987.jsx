import React from 'react';
const LABEL_32987 = 'component_32987';
export function Component32987({ value = 32987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32987, 'data-value': derived.doubled }, children);
}
export default Component32987;
