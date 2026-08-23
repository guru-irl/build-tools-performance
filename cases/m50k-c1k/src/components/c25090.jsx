import React from 'react';
const LABEL_25090 = 'component_25090';
export function Component25090({ value = 25090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25090, 'data-value': derived.doubled }, children);
}
export default Component25090;
