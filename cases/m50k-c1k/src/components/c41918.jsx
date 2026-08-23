import React from 'react';
const LABEL_41918 = 'component_41918';
export function Component41918({ value = 41918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41918, 'data-value': derived.doubled }, children);
}
export default Component41918;
