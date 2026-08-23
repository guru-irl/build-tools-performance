import React from 'react';
const LABEL_42227 = 'component_42227';
export function Component42227({ value = 42227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42227, 'data-value': derived.doubled }, children);
}
export default Component42227;
