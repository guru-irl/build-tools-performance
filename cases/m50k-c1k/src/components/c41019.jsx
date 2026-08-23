import React from 'react';
const LABEL_41019 = 'component_41019';
export function Component41019({ value = 41019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41019, 'data-value': derived.doubled }, children);
}
export default Component41019;
