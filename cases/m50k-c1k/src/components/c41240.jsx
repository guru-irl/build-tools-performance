import React from 'react';
const LABEL_41240 = 'component_41240';
export function Component41240({ value = 41240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41240, 'data-value': derived.doubled }, children);
}
export default Component41240;
