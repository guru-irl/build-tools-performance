import React from 'react';
const LABEL_29806 = 'component_29806';
export function Component29806({ value = 29806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29806, 'data-value': derived.doubled }, children);
}
export default Component29806;
