import React from 'react';
const LABEL_46588 = 'component_46588';
export function Component46588({ value = 46588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46588, 'data-value': derived.doubled }, children);
}
export default Component46588;
