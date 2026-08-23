import React from 'react';
const LABEL_28388 = 'component_28388';
export function Component28388({ value = 28388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28388, 'data-value': derived.doubled }, children);
}
export default Component28388;
