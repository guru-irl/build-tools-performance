import React from 'react';
const LABEL_29230 = 'component_29230';
export function Component29230({ value = 29230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29230, 'data-value': derived.doubled }, children);
}
export default Component29230;
