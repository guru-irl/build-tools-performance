import React from 'react';
const LABEL_13143 = 'component_13143';
export function Component13143({ value = 13143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13143, 'data-value': derived.doubled }, children);
}
export default Component13143;
