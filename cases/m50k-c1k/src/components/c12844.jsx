import React from 'react';
const LABEL_12844 = 'component_12844';
export function Component12844({ value = 12844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12844, 'data-value': derived.doubled }, children);
}
export default Component12844;
