import React from 'react';
const LABEL_41615 = 'component_41615';
export function Component41615({ value = 41615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41615, 'data-value': derived.doubled }, children);
}
export default Component41615;
