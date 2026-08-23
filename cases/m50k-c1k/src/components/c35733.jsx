import React from 'react';
const LABEL_35733 = 'component_35733';
export function Component35733({ value = 35733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35733, 'data-value': derived.doubled }, children);
}
export default Component35733;
