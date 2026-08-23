import React from 'react';
const LABEL_37227 = 'component_37227';
export function Component37227({ value = 37227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37227, 'data-value': derived.doubled }, children);
}
export default Component37227;
