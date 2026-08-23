import React from 'react';
const LABEL_29327 = 'component_29327';
export function Component29327({ value = 29327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29327, 'data-value': derived.doubled }, children);
}
export default Component29327;
