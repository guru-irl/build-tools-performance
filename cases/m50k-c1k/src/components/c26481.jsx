import React from 'react';
const LABEL_26481 = 'component_26481';
export function Component26481({ value = 26481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26481, 'data-value': derived.doubled }, children);
}
export default Component26481;
