import React from 'react';
const LABEL_41201 = 'component_41201';
export function Component41201({ value = 41201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41201, 'data-value': derived.doubled }, children);
}
export default Component41201;
