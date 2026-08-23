import React from 'react';
const LABEL_41640 = 'component_41640';
export function Component41640({ value = 41640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41640, 'data-value': derived.doubled }, children);
}
export default Component41640;
