import React from 'react';
const LABEL_25670 = 'component_25670';
export function Component25670({ value = 25670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25670, 'data-value': derived.doubled }, children);
}
export default Component25670;
