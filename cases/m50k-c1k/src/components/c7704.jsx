import React from 'react';
const LABEL_7704 = 'component_7704';
export function Component7704({ value = 7704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7704, 'data-value': derived.doubled }, children);
}
export default Component7704;
