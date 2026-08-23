import React from 'react';
const LABEL_12183 = 'component_12183';
export function Component12183({ value = 12183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12183, 'data-value': derived.doubled }, children);
}
export default Component12183;
