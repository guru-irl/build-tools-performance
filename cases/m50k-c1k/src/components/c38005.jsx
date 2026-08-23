import React from 'react';
const LABEL_38005 = 'component_38005';
export function Component38005({ value = 38005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38005, 'data-value': derived.doubled }, children);
}
export default Component38005;
