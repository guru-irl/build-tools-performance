import React from 'react';
const LABEL_45365 = 'component_45365';
export function Component45365({ value = 45365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45365, 'data-value': derived.doubled }, children);
}
export default Component45365;
