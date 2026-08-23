import React from 'react';
const LABEL_36100 = 'component_36100';
export function Component36100({ value = 36100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36100, 'data-value': derived.doubled }, children);
}
export default Component36100;
