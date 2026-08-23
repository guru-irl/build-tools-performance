import React from 'react';
const LABEL_29190 = 'component_29190';
export function Component29190({ value = 29190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29190, 'data-value': derived.doubled }, children);
}
export default Component29190;
