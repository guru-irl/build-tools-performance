import React from 'react';
const LABEL_41490 = 'component_41490';
export function Component41490({ value = 41490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41490, 'data-value': derived.doubled }, children);
}
export default Component41490;
