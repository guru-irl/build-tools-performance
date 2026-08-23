import React from 'react';
const LABEL_45430 = 'component_45430';
export function Component45430({ value = 45430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45430, 'data-value': derived.doubled }, children);
}
export default Component45430;
