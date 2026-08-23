import React from 'react';
const LABEL_450 = 'component_450';
export function Component450({ value = 450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_450, 'data-value': derived.doubled }, children);
}
export default Component450;
