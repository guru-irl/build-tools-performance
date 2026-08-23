import React from 'react';
const LABEL_7566 = 'component_7566';
export function Component7566({ value = 7566, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7566, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7566, 'data-value': derived.doubled }, children);
}
export default Component7566;
