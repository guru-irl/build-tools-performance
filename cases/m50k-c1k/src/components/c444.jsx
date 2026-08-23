import React from 'react';
const LABEL_444 = 'component_444';
export function Component444({ value = 444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_444, 'data-value': derived.doubled }, children);
}
export default Component444;
