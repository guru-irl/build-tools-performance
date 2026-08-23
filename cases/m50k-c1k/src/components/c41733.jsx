import React from 'react';
const LABEL_41733 = 'component_41733';
export function Component41733({ value = 41733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41733, 'data-value': derived.doubled }, children);
}
export default Component41733;
