import React from 'react';
const LABEL_27479 = 'component_27479';
export function Component27479({ value = 27479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27479, 'data-value': derived.doubled }, children);
}
export default Component27479;
