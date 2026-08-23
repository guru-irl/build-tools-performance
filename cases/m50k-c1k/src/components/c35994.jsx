import React from 'react';
const LABEL_35994 = 'component_35994';
export function Component35994({ value = 35994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35994, 'data-value': derived.doubled }, children);
}
export default Component35994;
