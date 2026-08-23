import React from 'react';
const LABEL_25373 = 'component_25373';
export function Component25373({ value = 25373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25373, 'data-value': derived.doubled }, children);
}
export default Component25373;
