import React from 'react';
const LABEL_29143 = 'component_29143';
export function Component29143({ value = 29143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29143, 'data-value': derived.doubled }, children);
}
export default Component29143;
