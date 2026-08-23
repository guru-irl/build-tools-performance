import React from 'react';
const LABEL_41768 = 'component_41768';
export function Component41768({ value = 41768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41768, 'data-value': derived.doubled }, children);
}
export default Component41768;
