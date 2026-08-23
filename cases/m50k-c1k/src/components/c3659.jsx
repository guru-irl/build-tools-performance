import React from 'react';
const LABEL_3659 = 'component_3659';
export function Component3659({ value = 3659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3659, 'data-value': derived.doubled }, children);
}
export default Component3659;
