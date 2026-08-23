import React from 'react';
const LABEL_29987 = 'component_29987';
export function Component29987({ value = 29987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29987, 'data-value': derived.doubled }, children);
}
export default Component29987;
