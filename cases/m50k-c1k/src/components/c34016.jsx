import React from 'react';
const LABEL_34016 = 'component_34016';
export function Component34016({ value = 34016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34016, 'data-value': derived.doubled }, children);
}
export default Component34016;
