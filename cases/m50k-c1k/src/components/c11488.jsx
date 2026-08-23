import React from 'react';
const LABEL_11488 = 'component_11488';
export function Component11488({ value = 11488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11488, 'data-value': derived.doubled }, children);
}
export default Component11488;
