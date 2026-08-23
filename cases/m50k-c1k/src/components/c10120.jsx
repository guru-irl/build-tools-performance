import React from 'react';
const LABEL_10120 = 'component_10120';
export function Component10120({ value = 10120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10120, 'data-value': derived.doubled }, children);
}
export default Component10120;
