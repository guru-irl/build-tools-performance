import React from 'react';
const LABEL_45036 = 'component_45036';
export function Component45036({ value = 45036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45036, 'data-value': derived.doubled }, children);
}
export default Component45036;
