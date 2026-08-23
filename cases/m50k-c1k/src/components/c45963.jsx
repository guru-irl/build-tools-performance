import React from 'react';
const LABEL_45963 = 'component_45963';
export function Component45963({ value = 45963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45963, 'data-value': derived.doubled }, children);
}
export default Component45963;
