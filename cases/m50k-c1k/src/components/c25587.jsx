import React from 'react';
const LABEL_25587 = 'component_25587';
export function Component25587({ value = 25587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25587, 'data-value': derived.doubled }, children);
}
export default Component25587;
