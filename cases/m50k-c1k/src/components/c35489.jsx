import React from 'react';
const LABEL_35489 = 'component_35489';
export function Component35489({ value = 35489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35489, 'data-value': derived.doubled }, children);
}
export default Component35489;
