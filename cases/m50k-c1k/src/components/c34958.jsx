import React from 'react';
const LABEL_34958 = 'component_34958';
export function Component34958({ value = 34958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34958, 'data-value': derived.doubled }, children);
}
export default Component34958;
