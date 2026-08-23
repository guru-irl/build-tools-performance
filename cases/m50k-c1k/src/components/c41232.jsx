import React from 'react';
const LABEL_41232 = 'component_41232';
export function Component41232({ value = 41232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41232, 'data-value': derived.doubled }, children);
}
export default Component41232;
