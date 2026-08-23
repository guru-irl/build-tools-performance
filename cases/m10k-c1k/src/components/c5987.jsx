import React from 'react';
const LABEL_5987 = 'component_5987';
export function Component5987({ value = 5987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5987, 'data-value': derived.doubled }, children);
}
export default Component5987;
