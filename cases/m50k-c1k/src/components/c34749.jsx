import React from 'react';
const LABEL_34749 = 'component_34749';
export function Component34749({ value = 34749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34749, 'data-value': derived.doubled }, children);
}
export default Component34749;
