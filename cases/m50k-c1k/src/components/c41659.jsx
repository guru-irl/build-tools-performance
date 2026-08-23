import React from 'react';
const LABEL_41659 = 'component_41659';
export function Component41659({ value = 41659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41659, 'data-value': derived.doubled }, children);
}
export default Component41659;
