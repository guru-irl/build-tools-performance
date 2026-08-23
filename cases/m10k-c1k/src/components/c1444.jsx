import React from 'react';
const LABEL_1444 = 'component_1444';
export function Component1444({ value = 1444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1444, 'data-value': derived.doubled }, children);
}
export default Component1444;
