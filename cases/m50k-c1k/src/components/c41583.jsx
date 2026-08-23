import React from 'react';
const LABEL_41583 = 'component_41583';
export function Component41583({ value = 41583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41583, 'data-value': derived.doubled }, children);
}
export default Component41583;
