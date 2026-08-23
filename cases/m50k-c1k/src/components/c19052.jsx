import React from 'react';
const LABEL_19052 = 'component_19052';
export function Component19052({ value = 19052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19052, 'data-value': derived.doubled }, children);
}
export default Component19052;
