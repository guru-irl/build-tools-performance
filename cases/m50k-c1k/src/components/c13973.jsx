import React from 'react';
const LABEL_13973 = 'component_13973';
export function Component13973({ value = 13973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13973, 'data-value': derived.doubled }, children);
}
export default Component13973;
