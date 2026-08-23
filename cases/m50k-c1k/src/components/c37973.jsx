import React from 'react';
const LABEL_37973 = 'component_37973';
export function Component37973({ value = 37973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37973, 'data-value': derived.doubled }, children);
}
export default Component37973;
