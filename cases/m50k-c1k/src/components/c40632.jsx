import React from 'react';
const LABEL_40632 = 'component_40632';
export function Component40632({ value = 40632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40632, 'data-value': derived.doubled }, children);
}
export default Component40632;
