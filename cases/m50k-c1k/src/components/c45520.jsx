import React from 'react';
const LABEL_45520 = 'component_45520';
export function Component45520({ value = 45520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45520, 'data-value': derived.doubled }, children);
}
export default Component45520;
