import React from 'react';
const LABEL_5994 = 'component_5994';
export function Component5994({ value = 5994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5994, 'data-value': derived.doubled }, children);
}
export default Component5994;
