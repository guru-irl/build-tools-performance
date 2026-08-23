import React from 'react';
const LABEL_46887 = 'component_46887';
export function Component46887({ value = 46887, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46887, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46887, 'data-value': derived.doubled }, children);
}
export default Component46887;
