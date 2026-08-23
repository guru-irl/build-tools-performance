import React from 'react';
const LABEL_25987 = 'component_25987';
export function Component25987({ value = 25987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25987, 'data-value': derived.doubled }, children);
}
export default Component25987;
