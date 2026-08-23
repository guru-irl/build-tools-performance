import React from 'react';
const LABEL_18960 = 'component_18960';
export function Component18960({ value = 18960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18960, 'data-value': derived.doubled }, children);
}
export default Component18960;
