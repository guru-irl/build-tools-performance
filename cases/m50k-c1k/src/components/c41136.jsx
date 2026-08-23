import React from 'react';
const LABEL_41136 = 'component_41136';
export function Component41136({ value = 41136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41136, 'data-value': derived.doubled }, children);
}
export default Component41136;
