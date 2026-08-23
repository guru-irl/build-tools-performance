import React from 'react';
const LABEL_37042 = 'component_37042';
export function Component37042({ value = 37042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37042, 'data-value': derived.doubled }, children);
}
export default Component37042;
