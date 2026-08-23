import React from 'react';
const LABEL_34468 = 'component_34468';
export function Component34468({ value = 34468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34468, 'data-value': derived.doubled }, children);
}
export default Component34468;
