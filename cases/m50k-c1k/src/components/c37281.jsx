import React from 'react';
const LABEL_37281 = 'component_37281';
export function Component37281({ value = 37281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37281, 'data-value': derived.doubled }, children);
}
export default Component37281;
