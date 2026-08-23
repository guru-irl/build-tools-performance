import React from 'react';
const LABEL_12223 = 'component_12223';
export function Component12223({ value = 12223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12223, 'data-value': derived.doubled }, children);
}
export default Component12223;
