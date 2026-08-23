import React from 'react';
const LABEL_22005 = 'component_22005';
export function Component22005({ value = 22005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22005, 'data-value': derived.doubled }, children);
}
export default Component22005;
