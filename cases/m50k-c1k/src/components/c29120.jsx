import React from 'react';
const LABEL_29120 = 'component_29120';
export function Component29120({ value = 29120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29120, 'data-value': derived.doubled }, children);
}
export default Component29120;
