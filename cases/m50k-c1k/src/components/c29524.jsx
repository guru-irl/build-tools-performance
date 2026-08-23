import React from 'react';
const LABEL_29524 = 'component_29524';
export function Component29524({ value = 29524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29524, 'data-value': derived.doubled }, children);
}
export default Component29524;
