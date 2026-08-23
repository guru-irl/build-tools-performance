import React from 'react';
const LABEL_10987 = 'component_10987';
export function Component10987({ value = 10987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10987, 'data-value': derived.doubled }, children);
}
export default Component10987;
