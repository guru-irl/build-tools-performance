import React from 'react';
const LABEL_31227 = 'component_31227';
export function Component31227({ value = 31227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31227, 'data-value': derived.doubled }, children);
}
export default Component31227;
