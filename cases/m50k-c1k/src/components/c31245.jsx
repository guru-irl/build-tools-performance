import React from 'react';
const LABEL_31245 = 'component_31245';
export function Component31245({ value = 31245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31245, 'data-value': derived.doubled }, children);
}
export default Component31245;
