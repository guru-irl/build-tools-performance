import React from 'react';
const LABEL_28240 = 'component_28240';
export function Component28240({ value = 28240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28240, 'data-value': derived.doubled }, children);
}
export default Component28240;
