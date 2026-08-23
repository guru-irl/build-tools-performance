import React from 'react';
const LABEL_13227 = 'component_13227';
export function Component13227({ value = 13227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13227, 'data-value': derived.doubled }, children);
}
export default Component13227;
