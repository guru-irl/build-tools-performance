import React from 'react';
const LABEL_41643 = 'component_41643';
export function Component41643({ value = 41643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41643, 'data-value': derived.doubled }, children);
}
export default Component41643;
