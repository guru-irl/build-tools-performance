import React from 'react';
const LABEL_36507 = 'component_36507';
export function Component36507({ value = 36507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36507, 'data-value': derived.doubled }, children);
}
export default Component36507;
