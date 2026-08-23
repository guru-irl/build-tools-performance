import React from 'react';
const LABEL_43280 = 'component_43280';
export function Component43280({ value = 43280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43280, 'data-value': derived.doubled }, children);
}
export default Component43280;
