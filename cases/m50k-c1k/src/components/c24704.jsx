import React from 'react';
const LABEL_24704 = 'component_24704';
export function Component24704({ value = 24704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24704, 'data-value': derived.doubled }, children);
}
export default Component24704;
