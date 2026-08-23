import React from 'react';
const LABEL_41402 = 'component_41402';
export function Component41402({ value = 41402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41402, 'data-value': derived.doubled }, children);
}
export default Component41402;
