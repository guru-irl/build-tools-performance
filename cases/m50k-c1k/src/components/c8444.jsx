import React from 'react';
const LABEL_8444 = 'component_8444';
export function Component8444({ value = 8444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8444, 'data-value': derived.doubled }, children);
}
export default Component8444;
