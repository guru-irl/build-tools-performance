import React from 'react';
const LABEL_4583 = 'component_4583';
export function Component4583({ value = 4583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4583, 'data-value': derived.doubled }, children);
}
export default Component4583;
