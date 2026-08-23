import React from 'react';
const LABEL_8388 = 'component_8388';
export function Component8388({ value = 8388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8388, 'data-value': derived.doubled }, children);
}
export default Component8388;
