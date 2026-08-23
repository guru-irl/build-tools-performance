import React from 'react';
const LABEL_45749 = 'component_45749';
export function Component45749({ value = 45749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45749, 'data-value': derived.doubled }, children);
}
export default Component45749;
