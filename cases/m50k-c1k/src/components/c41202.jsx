import React from 'react';
const LABEL_41202 = 'component_41202';
export function Component41202({ value = 41202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41202, 'data-value': derived.doubled }, children);
}
export default Component41202;
