import React from 'react';
const LABEL_4005 = 'component_4005';
export function Component4005({ value = 4005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4005, 'data-value': derived.doubled }, children);
}
export default Component4005;
