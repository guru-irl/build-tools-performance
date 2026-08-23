import React from 'react';
const LABEL_29770 = 'component_29770';
export function Component29770({ value = 29770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29770, 'data-value': derived.doubled }, children);
}
export default Component29770;
