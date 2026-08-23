import React from 'react';
const LABEL_41011 = 'component_41011';
export function Component41011({ value = 41011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41011, 'data-value': derived.doubled }, children);
}
export default Component41011;
