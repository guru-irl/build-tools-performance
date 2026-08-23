import React from 'react';
const LABEL_5842 = 'component_5842';
export function Component5842({ value = 5842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5842, 'data-value': derived.doubled }, children);
}
export default Component5842;
