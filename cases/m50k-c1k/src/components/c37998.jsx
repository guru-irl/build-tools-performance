import React from 'react';
const LABEL_37998 = 'component_37998';
export function Component37998({ value = 37998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37998, 'data-value': derived.doubled }, children);
}
export default Component37998;
