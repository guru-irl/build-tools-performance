import React from 'react';
const LABEL_7061 = 'component_7061';
export function Component7061({ value = 7061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7061, 'data-value': derived.doubled }, children);
}
export default Component7061;
