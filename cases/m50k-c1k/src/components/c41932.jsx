import React from 'react';
const LABEL_41932 = 'component_41932';
export function Component41932({ value = 41932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41932, 'data-value': derived.doubled }, children);
}
export default Component41932;
