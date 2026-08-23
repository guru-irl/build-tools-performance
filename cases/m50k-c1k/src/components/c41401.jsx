import React from 'react';
const LABEL_41401 = 'component_41401';
export function Component41401({ value = 41401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41401, 'data-value': derived.doubled }, children);
}
export default Component41401;
