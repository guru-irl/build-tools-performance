import React from 'react';
const LABEL_41317 = 'component_41317';
export function Component41317({ value = 41317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41317, 'data-value': derived.doubled }, children);
}
export default Component41317;
