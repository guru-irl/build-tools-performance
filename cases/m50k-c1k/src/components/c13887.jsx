import React from 'react';
const LABEL_13887 = 'component_13887';
export function Component13887({ value = 13887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13887, 'data-value': derived.doubled }, children);
}
export default Component13887;
