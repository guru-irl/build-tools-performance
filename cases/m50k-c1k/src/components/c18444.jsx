import React from 'react';
const LABEL_18444 = 'component_18444';
export function Component18444({ value = 18444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18444, 'data-value': derived.doubled }, children);
}
export default Component18444;
