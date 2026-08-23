import React from 'react';
const LABEL_29848 = 'component_29848';
export function Component29848({ value = 29848, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29848, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29848, 'data-value': derived.doubled }, children);
}
export default Component29848;
