import React from 'react';
const LABEL_19737 = 'component_19737';
export function Component19737({ value = 19737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19737, 'data-value': derived.doubled }, children);
}
export default Component19737;
