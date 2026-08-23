import React from 'react';
const LABEL_41632 = 'component_41632';
export function Component41632({ value = 41632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41632, 'data-value': derived.doubled }, children);
}
export default Component41632;
