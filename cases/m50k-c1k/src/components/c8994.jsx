import React from 'react';
const LABEL_8994 = 'component_8994';
export function Component8994({ value = 8994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8994, 'data-value': derived.doubled }, children);
}
export default Component8994;
