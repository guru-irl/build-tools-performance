import React from 'react';
const LABEL_37587 = 'component_37587';
export function Component37587({ value = 37587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37587, 'data-value': derived.doubled }, children);
}
export default Component37587;
