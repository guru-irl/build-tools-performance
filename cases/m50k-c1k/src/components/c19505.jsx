import React from 'react';
const LABEL_19505 = 'component_19505';
export function Component19505({ value = 19505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19505, 'data-value': derived.doubled }, children);
}
export default Component19505;
