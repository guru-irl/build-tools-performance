import React from 'react';
const LABEL_37842 = 'component_37842';
export function Component37842({ value = 37842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37842, 'data-value': derived.doubled }, children);
}
export default Component37842;
