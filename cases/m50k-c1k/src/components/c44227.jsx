import React from 'react';
const LABEL_44227 = 'component_44227';
export function Component44227({ value = 44227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44227, 'data-value': derived.doubled }, children);
}
export default Component44227;
