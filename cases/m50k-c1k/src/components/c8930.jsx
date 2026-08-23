import React from 'react';
const LABEL_8930 = 'component_8930';
export function Component8930({ value = 8930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8930, 'data-value': derived.doubled }, children);
}
export default Component8930;
