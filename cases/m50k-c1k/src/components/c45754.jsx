import React from 'react';
const LABEL_45754 = 'component_45754';
export function Component45754({ value = 45754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45754, 'data-value': derived.doubled }, children);
}
export default Component45754;
