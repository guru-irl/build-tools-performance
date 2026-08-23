import React from 'react';
const LABEL_5227 = 'component_5227';
export function Component5227({ value = 5227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5227, 'data-value': derived.doubled }, children);
}
export default Component5227;
