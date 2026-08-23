import React from 'react';
const LABEL_37517 = 'component_37517';
export function Component37517({ value = 37517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37517, 'data-value': derived.doubled }, children);
}
export default Component37517;
