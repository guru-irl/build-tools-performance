import React from 'react';
const LABEL_25084 = 'component_25084';
export function Component25084({ value = 25084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25084, 'data-value': derived.doubled }, children);
}
export default Component25084;
