import React from 'react';
const LABEL_25353 = 'component_25353';
export function Component25353({ value = 25353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25353, 'data-value': derived.doubled }, children);
}
export default Component25353;
