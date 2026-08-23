import React from 'react';
const LABEL_25035 = 'component_25035';
export function Component25035({ value = 25035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25035, 'data-value': derived.doubled }, children);
}
export default Component25035;
