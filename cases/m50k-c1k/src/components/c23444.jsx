import React from 'react';
const LABEL_23444 = 'component_23444';
export function Component23444({ value = 23444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23444, 'data-value': derived.doubled }, children);
}
export default Component23444;
