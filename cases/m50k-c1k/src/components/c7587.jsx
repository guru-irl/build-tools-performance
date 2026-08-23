import React from 'react';
const LABEL_7587 = 'component_7587';
export function Component7587({ value = 7587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7587, 'data-value': derived.doubled }, children);
}
export default Component7587;
