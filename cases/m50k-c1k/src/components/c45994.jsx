import React from 'react';
const LABEL_45994 = 'component_45994';
export function Component45994({ value = 45994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45994, 'data-value': derived.doubled }, children);
}
export default Component45994;
