import React from 'react';
const LABEL_25451 = 'component_25451';
export function Component25451({ value = 25451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25451, 'data-value': derived.doubled }, children);
}
export default Component25451;
