import React from 'react';
const LABEL_41462 = 'component_41462';
export function Component41462({ value = 41462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41462, 'data-value': derived.doubled }, children);
}
export default Component41462;
