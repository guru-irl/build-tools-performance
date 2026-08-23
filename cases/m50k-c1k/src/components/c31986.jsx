import React from 'react';
const LABEL_31986 = 'component_31986';
export function Component31986({ value = 31986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31986, 'data-value': derived.doubled }, children);
}
export default Component31986;
