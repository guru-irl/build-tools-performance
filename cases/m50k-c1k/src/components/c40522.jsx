import React from 'react';
const LABEL_40522 = 'component_40522';
export function Component40522({ value = 40522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40522, 'data-value': derived.doubled }, children);
}
export default Component40522;
