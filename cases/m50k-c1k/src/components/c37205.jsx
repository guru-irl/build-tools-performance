import React from 'react';
const LABEL_37205 = 'component_37205';
export function Component37205({ value = 37205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37205, 'data-value': derived.doubled }, children);
}
export default Component37205;
