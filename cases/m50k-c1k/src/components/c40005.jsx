import React from 'react';
const LABEL_40005 = 'component_40005';
export function Component40005({ value = 40005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40005, 'data-value': derived.doubled }, children);
}
export default Component40005;
