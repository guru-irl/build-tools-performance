import React from 'react';
const LABEL_19994 = 'component_19994';
export function Component19994({ value = 19994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19994, 'data-value': derived.doubled }, children);
}
export default Component19994;
