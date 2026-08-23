import React from 'react';
const LABEL_34227 = 'component_34227';
export function Component34227({ value = 34227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34227, 'data-value': derived.doubled }, children);
}
export default Component34227;
