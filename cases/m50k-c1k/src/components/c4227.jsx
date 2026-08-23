import React from 'react';
const LABEL_4227 = 'component_4227';
export function Component4227({ value = 4227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4227, 'data-value': derived.doubled }, children);
}
export default Component4227;
