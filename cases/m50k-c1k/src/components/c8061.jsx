import React from 'react';
const LABEL_8061 = 'component_8061';
export function Component8061({ value = 8061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8061, 'data-value': derived.doubled }, children);
}
export default Component8061;
