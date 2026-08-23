import React from 'react';
const LABEL_11501 = 'component_11501';
export function Component11501({ value = 11501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11501, 'data-value': derived.doubled }, children);
}
export default Component11501;
