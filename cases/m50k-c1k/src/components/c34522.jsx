import React from 'react';
const LABEL_34522 = 'component_34522';
export function Component34522({ value = 34522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34522, 'data-value': derived.doubled }, children);
}
export default Component34522;
