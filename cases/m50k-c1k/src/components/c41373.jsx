import React from 'react';
const LABEL_41373 = 'component_41373';
export function Component41373({ value = 41373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41373, 'data-value': derived.doubled }, children);
}
export default Component41373;
