import React from 'react';
const LABEL_37714 = 'component_37714';
export function Component37714({ value = 37714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37714, 'data-value': derived.doubled }, children);
}
export default Component37714;
