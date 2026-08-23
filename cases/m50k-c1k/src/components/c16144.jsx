import React from 'react';
const LABEL_16144 = 'component_16144';
export function Component16144({ value = 16144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16144, 'data-value': derived.doubled }, children);
}
export default Component16144;
