import React from 'react';
const LABEL_35866 = 'component_35866';
export function Component35866({ value = 35866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35866, 'data-value': derived.doubled }, children);
}
export default Component35866;
