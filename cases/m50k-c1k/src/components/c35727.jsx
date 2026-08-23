import React from 'react';
const LABEL_35727 = 'component_35727';
export function Component35727({ value = 35727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35727, 'data-value': derived.doubled }, children);
}
export default Component35727;
