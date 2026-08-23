import React from 'react';
const LABEL_41982 = 'component_41982';
export function Component41982({ value = 41982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41982, 'data-value': derived.doubled }, children);
}
export default Component41982;
