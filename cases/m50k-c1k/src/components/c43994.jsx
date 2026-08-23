import React from 'react';
const LABEL_43994 = 'component_43994';
export function Component43994({ value = 43994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43994, 'data-value': derived.doubled }, children);
}
export default Component43994;
