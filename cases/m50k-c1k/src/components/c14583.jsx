import React from 'react';
const LABEL_14583 = 'component_14583';
export function Component14583({ value = 14583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14583, 'data-value': derived.doubled }, children);
}
export default Component14583;
