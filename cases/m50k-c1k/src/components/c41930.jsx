import React from 'react';
const LABEL_41930 = 'component_41930';
export function Component41930({ value = 41930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41930, 'data-value': derived.doubled }, children);
}
export default Component41930;
