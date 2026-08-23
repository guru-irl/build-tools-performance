import React from 'react';
const LABEL_41749 = 'component_41749';
export function Component41749({ value = 41749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41749, 'data-value': derived.doubled }, children);
}
export default Component41749;
