import React from 'react';
const LABEL_41241 = 'component_41241';
export function Component41241({ value = 41241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41241, 'data-value': derived.doubled }, children);
}
export default Component41241;
