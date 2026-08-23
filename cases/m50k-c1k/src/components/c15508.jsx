import React from 'react';
const LABEL_15508 = 'component_15508';
export function Component15508({ value = 15508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15508, 'data-value': derived.doubled }, children);
}
export default Component15508;
