import React from 'react';
const LABEL_14987 = 'component_14987';
export function Component14987({ value = 14987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14987, 'data-value': derived.doubled }, children);
}
export default Component14987;
