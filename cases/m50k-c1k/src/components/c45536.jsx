import React from 'react';
const LABEL_45536 = 'component_45536';
export function Component45536({ value = 45536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45536, 'data-value': derived.doubled }, children);
}
export default Component45536;
