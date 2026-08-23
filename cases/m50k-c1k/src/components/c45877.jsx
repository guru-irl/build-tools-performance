import React from 'react';
const LABEL_45877 = 'component_45877';
export function Component45877({ value = 45877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45877, 'data-value': derived.doubled }, children);
}
export default Component45877;
