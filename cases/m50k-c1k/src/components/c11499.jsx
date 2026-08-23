import React from 'react';
const LABEL_11499 = 'component_11499';
export function Component11499({ value = 11499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11499, 'data-value': derived.doubled }, children);
}
export default Component11499;
