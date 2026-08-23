import React from 'react';
const LABEL_34023 = 'component_34023';
export function Component34023({ value = 34023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34023, 'data-value': derived.doubled }, children);
}
export default Component34023;
