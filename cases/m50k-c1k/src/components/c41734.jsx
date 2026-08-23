import React from 'react';
const LABEL_41734 = 'component_41734';
export function Component41734({ value = 41734, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41734, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41734, 'data-value': derived.doubled }, children);
}
export default Component41734;
