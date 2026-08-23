import React from 'react';
const LABEL_16973 = 'component_16973';
export function Component16973({ value = 16973, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16973, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16973, 'data-value': derived.doubled }, children);
}
export default Component16973;
