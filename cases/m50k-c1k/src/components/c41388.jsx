import React from 'react';
const LABEL_41388 = 'component_41388';
export function Component41388({ value = 41388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41388, 'data-value': derived.doubled }, children);
}
export default Component41388;
