import React from 'react';
const LABEL_37994 = 'component_37994';
export function Component37994({ value = 37994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37994, 'data-value': derived.doubled }, children);
}
export default Component37994;
