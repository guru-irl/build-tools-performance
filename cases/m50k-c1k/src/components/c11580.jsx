import React from 'react';
const LABEL_11580 = 'component_11580';
export function Component11580({ value = 11580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11580, 'data-value': derived.doubled }, children);
}
export default Component11580;
