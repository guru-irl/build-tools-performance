import React from 'react';
const LABEL_29820 = 'component_29820';
export function Component29820({ value = 29820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29820, 'data-value': derived.doubled }, children);
}
export default Component29820;
