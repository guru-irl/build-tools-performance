import React from 'react';
const LABEL_11005 = 'component_11005';
export function Component11005({ value = 11005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11005, 'data-value': derived.doubled }, children);
}
export default Component11005;
