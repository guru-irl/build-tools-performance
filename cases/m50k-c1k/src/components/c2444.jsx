import React from 'react';
const LABEL_2444 = 'component_2444';
export function Component2444({ value = 2444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2444, 'data-value': derived.doubled }, children);
}
export default Component2444;
