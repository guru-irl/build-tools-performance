import React from 'react';
const LABEL_25426 = 'component_25426';
export function Component25426({ value = 25426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25426, 'data-value': derived.doubled }, children);
}
export default Component25426;
