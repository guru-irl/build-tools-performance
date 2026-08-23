import React from 'react';
const LABEL_34070 = 'component_34070';
export function Component34070({ value = 34070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34070, 'data-value': derived.doubled }, children);
}
export default Component34070;
