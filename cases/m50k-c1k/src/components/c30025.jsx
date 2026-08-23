import React from 'react';
const LABEL_30025 = 'component_30025';
export function Component30025({ value = 30025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30025, 'data-value': derived.doubled }, children);
}
export default Component30025;
