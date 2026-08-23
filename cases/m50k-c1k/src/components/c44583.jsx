import React from 'react';
const LABEL_44583 = 'component_44583';
export function Component44583({ value = 44583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44583, 'data-value': derived.doubled }, children);
}
export default Component44583;
