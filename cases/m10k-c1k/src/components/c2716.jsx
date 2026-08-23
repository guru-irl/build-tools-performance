import React from 'react';
const LABEL_2716 = 'component_2716';
export function Component2716({ value = 2716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2716, 'data-value': derived.doubled }, children);
}
export default Component2716;
