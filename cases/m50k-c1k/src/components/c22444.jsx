import React from 'react';
const LABEL_22444 = 'component_22444';
export function Component22444({ value = 22444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22444, 'data-value': derived.doubled }, children);
}
export default Component22444;
