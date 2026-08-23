import React from 'react';
const LABEL_45227 = 'component_45227';
export function Component45227({ value = 45227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45227, 'data-value': derived.doubled }, children);
}
export default Component45227;
