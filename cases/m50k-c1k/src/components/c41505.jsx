import React from 'react';
const LABEL_41505 = 'component_41505';
export function Component41505({ value = 41505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41505, 'data-value': derived.doubled }, children);
}
export default Component41505;
