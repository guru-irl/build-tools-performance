import React from 'react';
const LABEL_8212 = 'component_8212';
export function Component8212({ value = 8212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8212, 'data-value': derived.doubled }, children);
}
export default Component8212;
