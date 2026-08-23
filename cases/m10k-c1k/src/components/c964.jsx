import React from 'react';
const LABEL_964 = 'component_964';
export function Component964({ value = 964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_964, 'data-value': derived.doubled }, children);
}
export default Component964;
