import React from 'react';
const LABEL_37188 = 'component_37188';
export function Component37188({ value = 37188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37188, 'data-value': derived.doubled }, children);
}
export default Component37188;
