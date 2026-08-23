import React from 'react';
const LABEL_35933 = 'component_35933';
export function Component35933({ value = 35933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35933, 'data-value': derived.doubled }, children);
}
export default Component35933;
