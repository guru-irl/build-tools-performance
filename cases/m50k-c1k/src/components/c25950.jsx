import React from 'react';
const LABEL_25950 = 'component_25950';
export function Component25950({ value = 25950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25950, 'data-value': derived.doubled }, children);
}
export default Component25950;
