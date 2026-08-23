import React from 'react';
const LABEL_29980 = 'component_29980';
export function Component29980({ value = 29980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29980, 'data-value': derived.doubled }, children);
}
export default Component29980;
