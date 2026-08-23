import React from 'react';
const LABEL_37661 = 'component_37661';
export function Component37661({ value = 37661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37661, 'data-value': derived.doubled }, children);
}
export default Component37661;
