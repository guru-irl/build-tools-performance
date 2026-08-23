import React from 'react';
const LABEL_16190 = 'component_16190';
export function Component16190({ value = 16190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16190, 'data-value': derived.doubled }, children);
}
export default Component16190;
