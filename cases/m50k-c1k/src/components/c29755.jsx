import React from 'react';
const LABEL_29755 = 'component_29755';
export function Component29755({ value = 29755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29755, 'data-value': derived.doubled }, children);
}
export default Component29755;
