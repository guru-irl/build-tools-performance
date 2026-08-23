import React from 'react';
const LABEL_41227 = 'component_41227';
export function Component41227({ value = 41227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41227, 'data-value': derived.doubled }, children);
}
export default Component41227;
