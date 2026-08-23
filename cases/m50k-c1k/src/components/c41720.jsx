import React from 'react';
const LABEL_41720 = 'component_41720';
export function Component41720({ value = 41720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41720, 'data-value': derived.doubled }, children);
}
export default Component41720;
