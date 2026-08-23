import React from 'react';
const LABEL_11774 = 'component_11774';
export function Component11774({ value = 11774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11774, 'data-value': derived.doubled }, children);
}
export default Component11774;
