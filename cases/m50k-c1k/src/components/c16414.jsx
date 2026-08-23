import React from 'react';
const LABEL_16414 = 'component_16414';
export function Component16414({ value = 16414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16414, 'data-value': derived.doubled }, children);
}
export default Component16414;
