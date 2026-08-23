import React from 'react';
const LABEL_29871 = 'component_29871';
export function Component29871({ value = 29871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29871, 'data-value': derived.doubled }, children);
}
export default Component29871;
