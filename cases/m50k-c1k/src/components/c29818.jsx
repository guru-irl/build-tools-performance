import React from 'react';
const LABEL_29818 = 'component_29818';
export function Component29818({ value = 29818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29818, 'data-value': derived.doubled }, children);
}
export default Component29818;
