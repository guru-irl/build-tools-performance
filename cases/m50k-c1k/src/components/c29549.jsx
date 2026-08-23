import React from 'react';
const LABEL_29549 = 'component_29549';
export function Component29549({ value = 29549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29549, 'data-value': derived.doubled }, children);
}
export default Component29549;
