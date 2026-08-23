import React from 'react';
const LABEL_41039 = 'component_41039';
export function Component41039({ value = 41039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41039, 'data-value': derived.doubled }, children);
}
export default Component41039;
