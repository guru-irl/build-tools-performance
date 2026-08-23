import React from 'react';
const LABEL_16180 = 'component_16180';
export function Component16180({ value = 16180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16180, 'data-value': derived.doubled }, children);
}
export default Component16180;
