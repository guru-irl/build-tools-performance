import React from 'react';
const LABEL_11973 = 'component_11973';
export function Component11973({ value = 11973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11973, 'data-value': derived.doubled }, children);
}
export default Component11973;
