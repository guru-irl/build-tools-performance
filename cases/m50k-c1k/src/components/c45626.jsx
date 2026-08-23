import React from 'react';
const LABEL_45626 = 'component_45626';
export function Component45626({ value = 45626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45626, 'data-value': derived.doubled }, children);
}
export default Component45626;
