import React from 'react';
const LABEL_37217 = 'component_37217';
export function Component37217({ value = 37217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37217, 'data-value': derived.doubled }, children);
}
export default Component37217;
